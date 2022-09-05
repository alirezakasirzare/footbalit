const Validator = require('fastest-validator');
const v = new Validator();

class BaseValidator {
  checkValidation = (req, res, rules) => {
    const body = req.body;

    const check = v.compile(rules);
    const isValid = check(body);

    if (isValid !== true) {
      return res.json({ text: isValid[0].message, res });
    }
  };
}

module.exports = BaseValidator;
