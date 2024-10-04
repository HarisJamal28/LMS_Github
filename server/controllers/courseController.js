const Course = require('../models/coursesSchema.js');
const User = require('../models/userSchema.js');
const Enrolled = require('../models/enrolledcoursesSchema.js')

const getTotalCoursesAndStudents = async (req, res) => {
  try {
      const [totalCourses, totalStudents, totalEnrolledUnique] = await Promise.all([
          Course.countDocuments({ instructor: req.userId }),
          User.countDocuments({ role: 'student' }),
          Enrolled.distinct('userId')
      ]);

      const totalEnrolled = totalEnrolledUnique.length;
      console.log(totalCourses, totalStudents, totalEnrolled )
      
      res.json({ totalCourses, totalStudents, totalEnrolled });
  } catch (error) {
      console.error('Error fetching total courses and students:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

const getALLcourses = async (req, res) => {
  try {
      const totalCourses = await Course.countDocuments({});
      const pendingCourses = await Course.countDocuments({ status: 'Pending' });
      const acceptedCourses = await Course.countDocuments({ status: 'Accepted' });
      // console.log({ totalCourses, pendingCourses, acceptedCourses }); 
      res.json({ totalCourses, pendingCourses, acceptedCourses });
  } catch (error) {
      console.error('Error fetching total courses:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

const getCoursesByInstructor = async (req, res) => {
    try {
        const instructorId = req.userId;
        const courses = await Course.find({ instructor: instructorId });

        const formattedCourses = courses.map(course => ({
            ...course.toObject(),
            image: course.image ? course.image.toString('base64') : null // Convert Buffer to base64 string
        }));

        res.json(formattedCourses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ message: 'Error fetching courses' });
    }
};


const getCourseDetails = async (req, res) => {
  const { instructorId } = req.params;

  try {
      // Find courses by instructor
      const courses = await Course.find({ instructor: instructorId });

      // Get the count of unique users enrolled in each course
      const courseData = await Promise.all(courses.map(async (course) => {
          const enrolledCount = await Enrolled.distinct('userId', { courseId: course._id });
          return {
              courseId: course._id,
              title: course.title,
              imageUrl: course.imageUrl, // Add other course fields as needed
              price: course.price,
              status: course.status,
              enrolledCount: enrolledCount.length, // Count of unique users
          };
      }));

      res.json(courseData);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
};

const getCoursesForAdmin = async (req, res) => {
    try {
      const courses = await Course.find().populate('instructor', 'name'); // Fetch only the name field from User
        const formattedCourses = courses.map(course => {
        return {
          id: course._id,
          title: course.title,
          post_url: course.post_url,
          instructor: course.instructor ? course.instructor.name : 'Unknown', // Get instructor name
          level: course.level,
          price: course.price,
          status: course.status,
          createdAt: course.createdAt, // Use createdAt field
          image: course.image ? course.image.toString('base64') : null // Convert Buffer to base64 string if needed
        };
      });
  
      res.json(formattedCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Error fetching courses' });
    }
  };


  const updateCourseStatus = async (req, res) => {
    const { id, status } = req.body;

    if (!id || !['Accepted', 'Rejected'].includes(status)) {
        return res.status(400).json({ message: 'Invalid request' });
    }

    try {
        const updatedCourse = await Course.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({ message: 'Course status updated', course: updatedCourse });
    } catch (error) {
        console.error('Error updating course status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { getTotalCoursesAndStudents, getCoursesByInstructor, getCoursesForAdmin,  getALLcourses, updateCourseStatus, getCourseDetails};