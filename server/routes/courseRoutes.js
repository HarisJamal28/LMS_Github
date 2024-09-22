const express = require('express');
const Course = require('../models/coursesSchema.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
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

module.exports = router;
