const BaseValidator = require('./_base.validator');

class LeagueValidation extends BaseValidator {
  keyValueError = (error) => {};

  createLeauge = (req, res) => {
    const validation = {
      persian_name: 'string|min:1|max:100',
      english_name: 'string|min:1|max:100',
      country: 'string|min:1|max:100',
    };

    this.applyValidation(req, res, validation);
  };
}

const leagueValidation = new LeagueValidation();
module.exports = leagueValidation;
