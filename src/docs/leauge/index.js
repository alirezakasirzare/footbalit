const getAll = require('./getAll.leauge');
const getOne = require('./getOne.leauge');
const create = require('./create.leauge');
const update = require('./update.leauge');
const deleteOne = require('./delete.leauge');

module.exports = {
  paths: {
    '/leauge': {
      ...getAll,
      ...create,
    },
    '/leauge/{id}': {
      ...getOne,
      ...update,
      ...deleteOne,
    },
  },
};
