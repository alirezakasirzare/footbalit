const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// comment schema
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    text: {
      type: String,
      required: true,
    },
    user: { type: String, ref: 'User' },
    news: { type: String, ref: 'News' },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const Comment = mongoose.model('Comment', schema);
module.exports = Comment;
