const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// player schema
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
    team: { type: String, ref: 'Team' },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const Player = mongoose.model('Player', schema);
module.exports = Player;
