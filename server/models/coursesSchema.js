const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    post_url: { 
        type: String, 
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
    },
    rating: { 
        type: Number, 
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
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    featured: {
        type: Boolean,
        default: false
    },
    discountPrice: {
        type: Number,
        default: 0
    },
    discount: { 
        type: Boolean,
        default: false 
    },
    language:{
        type: String,
        default: 'English'
    },
    
    image: Buffer,

    imageContentType: String,

    status: { 
        type: String, 
        enum: ['Pending', 'Accepted', 'Rejected'], 
        default: 'Pending' 
    }

}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema, 'Courses');

module.exports = Course;
