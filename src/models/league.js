const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  persian_name: { type: String, minlength: 1, maxlength: 100, required: true },
  english_name: { type: String, minlength: 1, maxlength: 100, required: true },
  avatar: { type: String, minlength: 1, maxlength: 100, required: true },
});

module.exports = mongoose.model('League', schema);
