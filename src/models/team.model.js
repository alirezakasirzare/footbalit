const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// team schema
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
    league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const Team = mongoose.model('Team', schema);
module.exports = Team;
