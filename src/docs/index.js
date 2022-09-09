const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const league = require('./league');

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...league,
  ...tags,
};
