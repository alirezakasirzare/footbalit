const mongoose = require('mongoose');

/**
 * Check the Object id is valid or not
 *
 * @param {string} objecId - mongodb objecId
 * @returns {boolean} - the Object id validation result
 */
const checkObjectId = (data) => {
  return mongoose.Types.ObjectId.isValid(data);
};

module.exports = {
  checkObjectId,
};
