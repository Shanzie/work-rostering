const express = require('express');
const Leave = require('../models/Leave');
const router = express.Router();

// Apply for leave
router.post('/apply', async (req, res) => {
    try {
        const { userId, startDate, endDate, reason } = req.body;

        let leave = new Leave({ employee: userId, startDate, endDate, reason });
        await leave.save();

        res.json(leave);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;