const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    post_url: { 
        type: String, 
        required: true 
    },
    level: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true 
    },
    duration: { 
        type: String, 
        required: true 
    },
    lectures: { 
        type: Number, 
        required: true 
    },
    favorite: { 
        type: Boolean, 
        default: false 
    },
    price: { 
        type: Number, 
        required: true 
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema, 'Courses');

module.exports = Course;
