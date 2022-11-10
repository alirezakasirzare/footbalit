const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// league schema
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
    image: {
      type: String,
    },
    country: {
      type: String,
      maxlength: 100,
      required: true,
    },
    course: { type: String, ref: 'Course' },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const League = mongoose.model('League', schema);
module.exports = League;
