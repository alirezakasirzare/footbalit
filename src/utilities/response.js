const response = (res, success, code, msg, error, data) => {
  const responseData = {
    success,
    message: msg,
    error,
    data,
  };
  res.status(code).send(responseData);
};

// good status
const goodResponse = (res, { code = 200, msg = 'success', data = {} }) => {
  response(res, true, code, msg, {}, data);
};

// bad status
const badResponse = (res, { code, msg = 'error', error = {} }) => {
  response(res, false, code, msg, error, {});
};

// no found status
const notFoundResponse = (res, name) => {
  const responseData = {
    code: 404,
    error: {
      message: `this ${name} is not found`,
    },
    msg: 'not found',
  };
  badResponse(res, responseData);
};

module.exports = {
  goodResponse,
  badResponse,
  notFoundResponse,
};
