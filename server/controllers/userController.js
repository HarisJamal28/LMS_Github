const User = require('../models/userSchema.js')

const getTotalStudents = async (req, res) => {
    try {
        const totalStudents = await User.countDocuments({ role: 'student' });
        res.json({ totalStudents});
    } catch (error) {
        console.error('Error fetching total students:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getStudents = async (req, res) => {
  try {
    const students = await User.find({ role: 'student' }).select('-password');
    res.status(200).json({ success: true, students });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getTotalStudents, getStudents};