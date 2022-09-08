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

module.exports = {
  errorResponse,
  successResponse,
};
