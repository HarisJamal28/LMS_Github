const express = require('express');
const User = require('../models/userSchema.js');
const authMiddleware = require('../middleware/auth.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const secretKey = process.env.JWT_SECRET;

if (!secretKey) {
    throw new Error('JWT_SECRET environment variable is not set');
}

const router = express.Router();

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
    //CREATE JWT FOR USER AND SAVE HIS DETAILS INTO IT FOR SESSION USE
    const token = jwt.sign({ userId: savedUser._id }, secretKey, { expiresIn: '1h' });
    res.status(201).json({ success: true, message: 'Sign up successful', token });
    console.log("USER REGISTERATION SUCCESSFUL WITH JWT")
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
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }
    // Create JWT with user ID and role
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ success: true, message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;