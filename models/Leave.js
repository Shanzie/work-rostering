const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { type: String, default: 'pending' } // or 'approved', 'denied'
});

module.exports = mongoose.model('Leave', LeaveSchema);