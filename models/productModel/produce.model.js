const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: {
    type: String,
    unique: true
  },
  productName: {
    type: String,
    required: true,
    unique: true
  },
  productQty: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  productStatus: {
    type: [],
    required: true
  },
  createUser: {
    type: String,
    required: false
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;