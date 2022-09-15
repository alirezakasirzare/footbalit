const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// event schema
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    game: { type: String, ref: 'Game' },
    team: { type: String, ref: 'Team' },
    type: {
      type: String,
      enum: ['goal', 'change-player', 'card', 'penalty'],
    },
    minute: {
      type: Number,
      required: true,
      max: 90,
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const Event = mongoose.model('Event', schema);
module.exports = Event;
