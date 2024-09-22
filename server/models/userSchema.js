const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
    },
    email: { 
        type: String, 
        required: true,
        unique: true
    },
    mobile: { 
        type: String,
        required: true
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
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;
