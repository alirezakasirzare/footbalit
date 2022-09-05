var mongoose = require('mongoose');

checkMongoId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  return isValid;
};

module.exports = {
  checkMongoId,
};
