const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
    },
    email: { 
        type: String, 
        required: true,
        unique: true
    },
    mobile: { 
        type: String,
    },
    password: { 
        type: String,
        required: true
    },
    role: { 
        type: String,
        default: "student"
    },
    cnic: { 
        type: String,
        default: ''
    },
    qualification: { 
        type: String,
        default: ''
    },
    whatsappNumber: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    aboutMe: {
        type: String,
        default: ''
    },
    image: Buffer,

    imageContentType: String,
    
    refreshToken: String
    
}, { timestamps: true });

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;
