const { badResponse } = require('../utilities/response');

const serverError = (err, req, res, next) => {
  console.log(err);
  const data = { code: 500, msg: 'server error' };
  return badResponse(res, data);
};

module.exports = serverError;
