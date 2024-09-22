const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    invoiceNumber: {
        type: String,
        unique: true, // Ensure each invoice number is unique
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course' // Reference to the Course model
    }],
    status: {
        type: String,
        enum: ['Pending', 'Paid', 'Cancelled'], // Example statuses
        default: 'Pending'
    },
    lastDate: {
        type: Date,
        required: true
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Invoice', invoiceSchema);
