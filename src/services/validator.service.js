const Validator = require('fastest-validator');
const { validatorMessages } = require('../config/validator.config');

// validator with persian messages
const validatorService = new Validator({
  messages: validatorMessages,
});

module.exports = validatorService;
