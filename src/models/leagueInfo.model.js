const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// league info schema
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: mongoose.Types.ObjectId,
    },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    score: {
      type: Number,
      min: 0,
      default: 0,
    },
    goals_scored: {
      type: Number,
      min: 0,
      default: 0,
    },
    score_received: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const LeagueInfo = mongoose.model('LeagueInfo', schema);
module.exports = LeagueInfo;
