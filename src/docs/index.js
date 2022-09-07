const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const leauge = require('./leauge');

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...leauge,
  ...tags,
};
