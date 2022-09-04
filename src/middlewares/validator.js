var mongoose = require('mongoose');
const { badResponse } = require('../utilities/response');

const idValidator = (req, res, next) => {
  const id = req.params.id;
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidId) {
    const data = {
      code: 401,
      msg: 'not valid',
      error: {
        mesaage: 'the id params is not valid',
      },
    };

    return badResponse(res, data);
  }

  next();
};

module.exports = idValidator;
