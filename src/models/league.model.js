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
    country: {
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

const League = mongoose.model('League', schema);
module.exports = League;
