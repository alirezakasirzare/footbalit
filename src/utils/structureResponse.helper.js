const { calculatePages } = require('./pagination.helper');

/**
 * Create response object with pretty style
 *
 * @param {Object} resData - base response info
 * @param {Object} resData.error - error data
 * @param {Object} resData.data - success data
 * @param {Object} resData.message - short info about process
 *
 * @returns {Object} - response object
 */
const baseObject = ({ error = null, data = null, message }) => {
  const success = !error;
  return {
    error,
    data,
    success,
    message,
  };
};

/**
 * Create error response object
 *
 * @param {Object} error - error object
 * @returns {Object} - response object
 */
const errorResponse = (error) => {
  return baseObject({ error, message: 'The process encountered an error' });
};

/**
 * Create success response object
 *
 * @param {Object} data - data object
 * @returns {Object} - response object
 */
const successResponse = (data) => {
  return baseObject({ data, message: 'The process is successfully completed' });
};

/**
 * Create response object template for pagination
 *
 * @param {Object} data - data object
 * @returns {number} - page we want to see
 * @returns {number} - count the data in database
 */
const paginationRes = (data, page, count) => {
  const pages = calculatePages(count);
  const intPage = parseInt(page);

  return {
    data,
    page: intPage,
    pages,
    hasPrevPage: intPage > 1,
    hasNextPage: pages > intPage,
  };
};

module.exports = {
  errorResponse,
  successResponse,
  paginationRes,
};
