
const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    statusCode: {
        type: Number,
        required: true,
        unique: true
    },
    statusName: {
        type: String,
        required: true
    },
});

const Status = mongoose.model('Status', StatusSchema);

module.exports = Status;