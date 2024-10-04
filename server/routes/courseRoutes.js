const express = require('express');
const Course = require('../models/coursesSchema.js');
const authMiddleware = require('../middleware/auth.js');
const { getTotalCoursesAndStudents, getCoursesByInstructor, getCoursesForAdmin, getALLcourses, updateCourseStatus, getCourseDetails } = require('../controllers/courseController.js');
const multer = require('multer');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/count', authMiddleware, getTotalCoursesAndStudents);
router.get('/instructor-courses', authMiddleware, getCoursesByInstructor);
router.get('/admin-courses', authMiddleware, getCoursesForAdmin);
router.get('/admin-count-courses', authMiddleware,  getALLcourses);
router.get('/instructor/:instructorId/courses', authMiddleware, getCourseDetails);
router.patch('/update-status', updateCourseStatus);

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find({ status: 'Accepted' }); // Filter by status 'Accepted'
    const formattedCourses = courses.map(course => {
      return {
        ...course.toObject(),
        image: course.image ? course.image.toString('base64') : null // Convert Buffer to base64 string
      };
    });

    res.json(formattedCourses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

router.get('/categories', async (req, res) => {
  try {
      const categories = await Course.distinct('category');
      res.json(categories);
  } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
  }
});

router.post('/bulk', async (req, res) => {
  const { ids } = req.body;

  try {
      const courses = await Course.find({ _id: { $in: ids } });
      res.status(200).json({ success: true, courses });
  } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ success: false, message: 'Server error' });
  }
});


router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Uploaded file:', req.file);
  
  const {
    level, title, duration, lectures, price, category, featured, discountPrice, discount, description
  } = req.body;

  // Use the userId from the request object
  const instructor = req.userId;

  try {
    const imageBuffer = req.file ? req.file.buffer : null;

    const newCourse = new Course({
      level,
      title,
      duration,
      lectures,
      price,
      category,
      instructor,
      featured,
      discountPrice,
      discount,
      description,
      image: imageBuffer,
      imageContentType: req.file ? req.file.mimetype : null
    });

    const savedCourse = await newCourse.save();
    res.status(201).json({ success: true, course: savedCourse });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ success: false, message: 'Error creating course' });
  }
});


module.exports = router;
