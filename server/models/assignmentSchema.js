const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
}, { _id: true });

module.exports = assignmentSchema;
