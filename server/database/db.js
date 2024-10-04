const mongoose = require('mongoose')
const Course = require('../models/coursesSchema')
require('dotenv').config();

const courses = [
  {
      post_url: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "All level",
      title: "Sketch from A to Z",
      description: "Proposal indulged no do sociable he throwing settling.",
      rating: 4.0,
      duration: "12h 56m",
      lectures: 15,
      favorite: false,
      price: 199.99,
      category: "Design",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://plus.unsplash.com/premium_photo-1664104459156-21e2a06e7173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      title: "Introduction to JavaScript",
      description: "JavaScript for beginners and those who want to enhance their skills.",
      rating: 4.5,
      duration: "10h 30m",
      lectures: 20,
      favorite: true,
      price: 149.99,
      category: "Programming",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Intermediate",
      title: "Mastering CSS",
      description: "Learn CSS techniques for building responsive web designs.",
      rating: 4.8,
      duration: "8h 45m",
      lectures: 18,
      favorite: false,
      price: 129.99,
      category: "Web Development",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://plus.unsplash.com/premium_photo-1664104459156-21e2a06e7173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Advanced",
      title: "React JS",
      description: "Deep dive into React JS to create dynamic and interactive web apps.",
      rating: 4.7,
      duration: "15h 20m",
      lectures: 25,
      favorite: true,
      price: 249.99,
      category: "Programming",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "All level",
      title: "Sketch from A to Z",
      description: "Proposal indulged no do sociable he throwing settling.",
      rating: 4.0,
      duration: "12h 56m",
      lectures: 15,
      favorite: false,
      price: 199.99,
      category: "Design",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://plus.unsplash.com/premium_photo-1664104459156-21e2a06e7173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      title: "Introduction to JavaScript",
      description: "JavaScript for beginners and those who want to enhance their skills.",
      rating: 4.5,
      duration: "10h 30m",
      lectures: 20,
      favorite: true,
      price: 149.99,
      category: "Programming",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Intermediate",
      title: "Mastering CSS",
      description: "Learn CSS techniques for building responsive web designs.",
      rating: 4.8,
      duration: "8h 45m",
      lectures: 18,
      favorite: false,
      price: 129.99,
      category: "Web Development",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://plus.unsplash.com/premium_photo-1664104459156-21e2a06e7173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Advanced",
      title: "React JS",
      description: "Deep dive into React JS to create dynamic and interactive web apps.",
      rating: 4.7,
      duration: "15h 20m",
      lectures: 25,
      favorite: true,
      price: 249.99,
      category: "Programming",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "All level",
      title: "Sketch from A to Z",
      description: "Proposal indulged no do sociable he throwing settling.",
      rating: 4.0,
      duration: "12h 56m",
      lectures: 15,
      favorite: false,
      price: 199.99,
      category: "Design",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://plus.unsplash.com/premium_photo-1664104459156-21e2a06e7173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Beginner",
      title: "Introduction to JavaScript",
      description: "JavaScript for beginners and those who want to enhance their skills.",
      rating: 4.5,
      duration: "10h 30m",
      lectures: 20,
      favorite: true,
      price: 149.99,
      category: "Programming",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Intermediate",
      title: "Mastering CSS",
      description: "Learn CSS techniques for building responsive web designs.",
      rating: 4.8,
      duration: "8h 45m",
      lectures: 18,
      favorite: false,
      price: 129.99,
      category: "Web Development",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  },
  {
      post_url: "https://plus.unsplash.com/premium_photo-1664104459156-21e2a06e7173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      level: "Advanced",
      title: "React JS",
      description: "Deep dive into React JS to create dynamic and interactive web apps.",
      rating: 4.7,
      duration: "15h 20m",
      lectures: 25,
      favorite: true,
      price: 249.99,
      category: "Programming",
      instructor: null, // Update as necessary
      featured: false,
      discountPrice: 0,
      discount: false,
      language: "English",
      image: null, // Add image buffer if necessary
      status: 'Accepted'
  }
];

const dbURI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
    // await Course.deleteMany(); // Clear all courses
    // console.log('All courses deleted');
    // // Insert new courses
    // await Course.insertMany(courses);
    // console.log('New courses added');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;