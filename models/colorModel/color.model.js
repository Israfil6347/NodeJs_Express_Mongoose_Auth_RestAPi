
const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    colorCode: {
        type: String,
        required: true,
        unique: true
    },
    colorName: {
        type: String,
        required: true
    },
});

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;