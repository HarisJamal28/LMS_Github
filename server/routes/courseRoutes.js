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
    const courses = await Course.find({ status: 'Accepted' });
    const formattedCourses = courses.map(course => {
      return {
        ...course.toObject(),
        image: course.image ? course.image.toString('base64') : null
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



// POST route to add a quiz to a course
router.post('/:courseId/quizzes', async (req, res) => {
  const { courseId } = req.params;
  const { title, description, questions } = req.body;

  try {
      // Find the course by ID
      const course = await Course.findById(courseId);
      if (!course) {
          return res.status(404).json({ message: 'Course not found' });
      }

      // Create a new quiz object
      const newQuiz = {
          title,
          description,
          questions,
      };

      // Add the quiz to the course's quizzes array
      course.quizzes.push(newQuiz);
      await course.save(); // Save the updated course document

      res.status(201).json({ message: 'Quiz added successfully', quiz: newQuiz });
  } catch (error) {
      console.error('Error adding quiz:', error);
      res.status(500).json({ message: 'Failed to add quiz', error });
  }
});

router.get('/:courseId/quizzes', async (req, res) => {
  const { courseId } = req.params;

  try {
    // Fetch the course by ID
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: 'Course not found.' });
    }

    // Return quizzes for the found course
    res.status(200).json(course.quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;
