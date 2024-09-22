const express = require('express');
const router = express.Router();
const EnrolledCourse = require('../models/enrolledcoursesSchema'); // Make sure to adjust the path as needed
const Course = require('../models/coursesSchema'); // Adjust path for Course model

router.get('/enrolled/:userId', async (req, res) => {
    try {
        const enrolledCourses = await EnrolledCourse.find({ userId: req.params.userId }).populate('courseId');
        res.json(enrolledCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
