const Invoice = require('../models/invoiceSchema');
const enrolledcourses = require('../models/enrolledcoursesSchema');

const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find().populate('courses');
        res.status(200).json({ success: true, invoices });
    } catch (error) {
        console.error('Error fetching invoices:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

const payInvoice = async (req, res) => {
    const { id } = req.body;

    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(
            id,
            { status: 'Paid' },
            { new: true }
        );

        if (!updatedInvoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }

        const { userId, courses } = updatedInvoice;
        const courseIds = courses.map(course => course._id);

        const enrollments = courseIds.map(courseId => ({
            userId,
            courseId
        }));

        await enrolledcourses.insertMany(enrollments);

        res.json({ success: true, invoice: updatedInvoice });
    } catch (error) {
        console.error('Error updating invoice:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getAllInvoices, payInvoice};