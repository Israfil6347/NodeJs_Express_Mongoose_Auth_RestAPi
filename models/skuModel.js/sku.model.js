const mongoose = require('mongoose');

const SKUSchema = new mongoose.Schema({
    SKU: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true,
       
    },
    Qty: {
        type: String,
        required: true,
       
    },
    color: {
        type: [],
        required: true,
        ref: 'Color',
       
    },
    productImage: {
        type: String,
        required: true,
    },
    otherImage: {
        type: [String],
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    expireDate: {
        type: String,
        required: true,
    },
});

const SKU = mongoose.model('SKU', SKUSchema);

module.exports = SKU;