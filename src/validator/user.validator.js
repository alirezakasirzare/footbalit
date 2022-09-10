const BaseValidator = require('./_base.validator');

class UserValidator extends BaseValidator {}

const userValidator = new UserValidator();
module.exports = userValidator;
