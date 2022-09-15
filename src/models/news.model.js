const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// news schema
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const News = mongoose.model('News', schema);
module.exports = News;
