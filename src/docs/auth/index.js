const login = require('./login.auth');
const register = require('./register.auth');

module.exports = {
  paths: {
    '/auth/login': {
      ...login,
    },
    // '/auth/register': {
    //   ...register,
    // },
  },
};
