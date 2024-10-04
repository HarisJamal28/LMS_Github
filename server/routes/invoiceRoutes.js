const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoiceSchema'); // Adjust the path as needed
const authMiddleware = require('../middleware/auth.js')
const { getAllInvoices, payInvoice } = require('../controllers/invoiceController.js');



router.get('/AdminInvoices', getAllInvoices);
router.put('/payinvoice', payInvoice);

router.post('/', authMiddleware, async (req, res) => {
    const { batch, invoiceNumber, amount, courses, lastDate } = req.body;

    try {
        const newInvoice = new Invoice({
            userId: req.userId,
            batch,
            invoiceNumber,
            amount,
            courses,
            lastDate,
        });

        await newInvoice.save();
        return res.status(201).json({ success: true, invoice: newInvoice });
    } catch (error) {
        console.error('Error creating invoice:', error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});


router.get('/', authMiddleware, async (req, res) => {
    try {
        const invoices = await Invoice.find({ userId: req.userId }).populate('courses'); // Populate course details
        res.status(200).json({ success: true, invoices });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});


module.exports = router;
