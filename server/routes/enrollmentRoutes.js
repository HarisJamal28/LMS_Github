const express = require('express');
const router = express.Router();
const EnrolledCourse = require('../models/enrolledcoursesSchema'); // Make sure to adjust the path as needed
const Course = require('../models/coursesSchema'); // Adjust path for Course model

// router.get('/enrolled/:userId', async (req, res) => {
//     try {
//         const enrolledCourses = await EnrolledCourse.find({ userId: req.params.userId }).populate('courseId');
//         res.json(enrolledCourses);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        // Find all enrolled courses for the user
        const enrolledCourses = await EnrolledCourse.find({ userId })
            .populate('courseId') // Populate course details
            .exec();

        // Send back the populated course details
        res.json({ courses: enrolledCourses.map(enrollment => enrollment.courseId) });
    } catch (error) {
        console.error('Error fetching enrolled courses:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/instructor/:instructorId/students', async (req, res) => {
    try {
        const { instructorId } = req.params;
        const courses = await Course.find({ instructor: instructorId });

        const courseMap = courses.reduce((map, course) => {
            map[course._id] = course.title;
            return map;
        }, {});

        const enrolledCourses = await EnrolledCourse.find({
            courseId: { $in: courses.map(course => course._id) }
        }).populate('userId');
        const students = enrolledCourses.map(ec => ({
            studentId: ec.userId._id,
            studentName: ec.userId.name,
            studentCity: ec.userId.city,
            enrollmentDate: ec.enrollmentDate,
            courseId: ec.courseId,
            courseTitle: courseMap[ec.courseId],
            progress: Math.round(Math.random() * 100)
        }));
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
