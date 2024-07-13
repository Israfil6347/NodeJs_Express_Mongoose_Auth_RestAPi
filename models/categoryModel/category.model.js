const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
    unique: true
  },
  categoryName: {
    type: String,
    // required: true,
    unique: true
  }
});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;