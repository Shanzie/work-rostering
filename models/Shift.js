const mongoose = require('mongoose');

const ShiftSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isBooked: { type: Boolean, default: false }
});

module.exports = mongoose.model('Shift', ShiftSchema);