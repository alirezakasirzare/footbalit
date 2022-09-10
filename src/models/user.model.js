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
    firat_name: {
      type: String,
      maxlength: 100,
      required: true,
    },
    last_name: {
      type: String,
      maxlength: 100,
      default: '',
    },
    email: {
      type: String,
      maxlength: 300,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      maxlength: 100,
      minlength: 4,
      required: true,
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN', 'SUPER_ADMIN'],
      default: 'USER',
    },
    permissions: {
      type: [String],
    },
  },
  {
    _id: false,
  }
);

schema.plugin(timestamps);

const User = mongoose.model('User', schema);
module.exports = User;
