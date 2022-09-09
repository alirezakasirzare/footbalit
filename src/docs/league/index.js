const getAll = require('./getAll.league');
const getOne = require('./getOne.league');
const create = require('./create.league');
const update = require('./update.league');
const deleteOne = require('./delete.league');

module.exports = {
  paths: {
    '/league': {
      ...getAll,
      ...create,
    },
    '/league/{id}': {
      ...getOne,
      ...update,
      ...deleteOne,
    },
  },
};
