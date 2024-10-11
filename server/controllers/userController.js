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

const deleteStudent = async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await User.findByIdAndDelete(studentId);
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    return res.status(200).json({ success: true, message: 'Student deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { getTotalStudents, getStudents, deleteStudent};