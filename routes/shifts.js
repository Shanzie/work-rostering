const express = require('express');
const Shift = require('../models/Shift');
const router = express.Router();

// Book a shift
router.post('/book', async (req, res) => {
    try {
        const { shiftId, userId } = req.body;

        let shift = await Shift.findById(shiftId);
        if (!shift) {
            return res.status(404).json({ msg: 'Shift not found' });
        }

        if (shift.isBooked) {
            return res.status(400).json({ msg: 'Shift is already booked' });
        }

        shift.isBooked = true;
        shift.employee = userId;
        await shift.save();

        res.json(shift);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
