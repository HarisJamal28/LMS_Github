const mongoose = require('mongoose');

const enrolledCourseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    enrollmentDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'dropped'],
        default: 'active'
    },
    progressPercentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    // completedLectures: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Lecture'
    // }],
    // lastAccessed: {
    //     type: Date,
    //     default: Date.now
    // },
    quizzesTaken: [{
        quizId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quiz'
        },
        score: {
            type: Number,
            min: 0,
            max: 100
        },
        dateTaken: {
            type: Date,
            default: Date.now
        }
    }]
});

const EnrolledCourse = mongoose.model('EnrolledCourse', enrolledCourseSchema);

module.exports = EnrolledCourse;