const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// game schema
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    team_one: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    team_two: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    status: {
      type: String,
      enum: ['ended', 'started', 'not started', 'suspended'],
      default: 'not started',
    },
    date: {
      type: Date,
      required: true,
    },
    team_one_goals: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    team_two_goals: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    winner: {
      type: String,
      maxlength: 100,
      default: '',
    },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const Game = mongoose.model('Game', schema);
module.exports = Game;
