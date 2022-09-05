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

const League = mongoose.model('League', schema);
module.exports = League;
