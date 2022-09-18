const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// code schema
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    email: {
      type: String,
      maxlength: 300,
      required: true,
      unique: true,
    },
    code: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const Code = mongoose.model('Code', schema);
module.exports = Code;
