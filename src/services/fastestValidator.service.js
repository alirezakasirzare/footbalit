const Validator = require('fastest-validator');
const { validatorMessages } = require('../config/validator.config');

const validatorService = new Validator({
  messages: validatorMessages,
});

module.exports = validatorService;
