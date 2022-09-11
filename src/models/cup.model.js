const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// cup schema
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    persian_name: {
      type: String,
      maxlength: 100,
      required: true,
    },
    english_name: {
      type: String,
      maxlength: 100,
      required: true,
    },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const Cup = mongoose.model('Cup', schema);
module.exports = Cup;
