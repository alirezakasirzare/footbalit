const Validator = require('fastest-validator');
const { validatorMessages } = require('../config/validator.config');
const mongoose = require('mongoose');

// validator with persian messages
const validatorService = new Validator({
  messages: validatorMessages,
  defaults: {
    objectID: {
      ObjectID: mongoose.Types.ObjectId,
    },
  },
});

module.exports = validatorService;
