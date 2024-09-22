const mongoose = require('mongoose')
const Course = require('../models/coursesSchema')
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
    // await Course.deleteMany(); // Optional: Clear the collection before adding new data
    // await Course.insertMany(courses);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;