const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// course schema
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      maxlength: 100,
      required: true,
    },
    number: {
      type: Number,
      min: 1,
      max: 100,
      required: true,
    },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const Course = mongoose.model('Course', schema);
module.exports = Course;
