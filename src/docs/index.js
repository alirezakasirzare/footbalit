const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const league = require('./league');
const auth = require('./auth');

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...league,
  ...auth,
};
