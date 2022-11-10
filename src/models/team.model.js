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
    name: {
      type: String,
      maxlength: 100,
      required: true,
    },
    image: {
      type: String,
    },
    cups: [{ type: String, ref: 'Cup' }],
    league: { type: String, ref: 'League' },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const Team = mongoose.model('Team', schema);
module.exports = Team;
