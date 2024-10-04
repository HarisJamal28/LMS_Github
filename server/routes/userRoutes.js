const express = require('express');
const User = require('../models/userSchema.js');
const authMiddleware = require('../middleware/auth.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const secretKey = process.env.JWT_SECRET;
const { getStudents } = require('../controllers/userController.js');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

if (!secretKey) {
    throw new Error('JWT_SECRET environment variable is not set');
}

const router = express.Router();


router.get('/students', authMiddleware, getStudents);


router.post('/register', async (req, res) => {
    //GETTING DATA FROM USER FOR REGISTERATION INTO DB
  const { name, email, mobile, password } = req.body;
  const newUser = new User({ name, email, mobile, password });
  try {

    //CHECK TO SEE IF ENTERED EMAIL ALREADY EXISTS
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        // IF ALREADY EXISTING THEN THROW ERROR ON SERVER AND NOTIFY CLIENT SIDE
        console.log("ALREADY REGISTERED EMAIL")
        return res.status(400).json({ success: false, message: 'Email already registered' });
    }
    //NOW DEALING WITH ENCRYPTION OF PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    //UPDATING THE DATA WITH NEW HASHED PASSWORD
    const newUser = new User({
        name,
        email,
        mobile,
        password: hashedPassword
    });

        const savedUser = await newUser.save();
        // Generate access token and refresh token
        const token = jwt.sign({ userId: savedUser._id, role: savedUser.role }, secretKey, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ userId: savedUser._id }, secretKey, { expiresIn: '7d' });

        // Save refresh token in DB
        savedUser.refreshToken = refreshToken;
        await savedUser.save();

        res.status(201).json({
            success: true,
            message: 'Sign up successful',
            token
        });
  } catch (error) {
    console.error('Error during USER Registeration:', error);
    res.status(400).json({ message: error.message });
  }
});


router.post('/profile_details', authMiddleware, async (req, res) => {
  const userId = req.userId; // Get userId from the decoded token
  const { cnic, qualification, whatsappNumber, city, address } = req.body;
  try {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ success: false, message: 'User not found' });
      }
      // Update user details
      user.cnic = cnic;
      user.qualification = qualification;
      user.whatsappNumber = whatsappNumber;
      user.city = city;
      user.address = address;
      // Save updated user data
      const updatedUser = await user.save();
      res.status(200).json({ success: true, message: 'Profile updated successfully', updatedUser });
  } catch (error) {
      console.error('Error during profile update:', error);
      res.status(400).json({ message: error.message });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Generate tokens
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey, { expiresIn: '1h' }); // Use user instead of savedUser
    const refreshToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '7d' });
    
    user.refreshToken = refreshToken; // Save the refresh token
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token, // Change token to accessToken
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



router.get('/profile', authMiddleware, async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/profile', authMiddleware, upload.single('image'), async (req, res) => {
  const userId = req.userId;
  const updates = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const imageBuffer = req.file ? req.file.buffer : null;

    user.name = updates.name || user.name;
    user.email = updates.email || user.email;
    user.mobile = updates.mobile || user.mobile;
    user.city = updates.city || user.city;
    user.aboutMe = updates.aboutMe || user.aboutMe;
    user.qualification = updates.qualification || user.qualification;

    if (imageBuffer) {
      user.image = imageBuffer;
      user.imageContentType = req.file.mimetype;
    }

    const updatedUser = await user.save(); // Save the existing user instance
    res.status(200).json({ success: true, message: 'Profile updated successfully', updatedUser });
  } catch (error) {
    console.error('Error during profile update:', error);
    res.status(400).json({ message: error.message });
  }
});


router.get('/users/:id', authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(req.userId);

    const user = await User.findById(userId).select('-password'); // Exclude password

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/refresh-token', async (req, res) => {
  const { userId } = req.body; // Get userId from request body
  const user = await User.findById(userId); // Find user by ID

  if (!user || !user.refreshToken) {
      return res.status(401).json({ success: false, message: 'No refresh token found' });
  }

  try {
      const decoded = jwt.verify(user.refreshToken, secretKey);
            const token = jwt.sign(
          { userId: user._id, role: user.role, msg: 'I AM THE NEW TOKEN' }, 
          secretKey, 
          { expiresIn: '1h' }
      );

      res.status(200).json({
          success: true,
          token
      });
  } catch (error) {
      console.error('Error during token refresh:', error);
      return res.status(403).json({ success: false, message: 'Invalid refresh token' });
  }
});




router.post('/logout', authMiddleware, async (req, res) => {
  try {
      const user = await User.findById(req.userId);
      if (user) {
          user.refreshToken = null; // Clear refresh token on logout
          await user.save();
      }
      res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
      res.status(500).json({ success: false, message: 'Logout failed' });
  }
});

module.exports = router;