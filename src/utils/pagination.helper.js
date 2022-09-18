const { pageRecords } = require('../config/general.config');

/**
 * calculate how much we page have
 *
 * @param {number} count - count of the data in the database
 */
const calculatePages = (count) => {
  return Math.ceil(count / pageRecords);
};

/**
 * calculate the skip we should do
 *
 * @param {number} page - the page we want to see
 */
const skipCount = (page) => {
  return (page - 1) * pageRecords;
};

module.exports = {
  calculatePages,
  skipCount,
};
