const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
      default: mongoose.Types.ObjectId(),
    },
    persian_name: stringRequiredRule,
    english_name: stringRequiredRule,
    country: stringRequiredRule,
  },
  {
    _id: false,
  }
);

mongoose.plugin((schema) => {
  schema.options.toJSON = {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    },
  };
});

schema.plugin(timestamps);
