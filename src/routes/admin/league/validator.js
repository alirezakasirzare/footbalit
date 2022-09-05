const Joi = require('joi');
const { badResponse } = require('../../../utilities/response');

class LeagueValidator {
  updateLeague = (req, res, next) => {
    // create schema
    const stringRequiredRule = Joi.string().min(1).max(100).required();

    const updateLeagueSchema = Joi.object({
      persian_name: stringRequiredRule,

      english_name: stringRequiredRule,

      country: stringRequiredRule,
    });

    // check data
    const isValidaData = updateLeagueSchema.validate(req.body);
    if (!isValidaData) {
      return badResponse(res, {
        code: 400,
        msg: 'not valid',
        error: isValidaData.error,
      });
    }

    next();
  };

  createLeague = (req, res, next) => {
    // create schema
    const createLeagueSchema = Joi.object({
      persian_name: Joi.string().min(1).max(100),
      english_name: Joi.string().min(1).max(100),
      country: Joi.string().min(13).max(100),
    });

    // check data
    const { error } = createLeagueSchema.validate(req.body, {
      presence: 'required',
      abortEarly: false,
    });
    if (error) {
      return badResponse(res, {
        code: 400,
        msg: 'not valid',
        error: error.details,
      });
    }

    next();
  };
}

module.exports = new LeagueValidator();
