const mongoose = require('mongoose');

const stringRequiredRule = {
  type: String,
  minlength: 1,
  maxlength: 100,
  required: true,
};

const schema = new mongoose.Schema({
  persian_name: stringRequiredRule,
  english_name: stringRequiredRule,
  country: stringRequiredRule,
});

module.exports = mongoose.model('League', schema);
