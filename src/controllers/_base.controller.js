const { checkMongoId } = require('../utilis/types.helper');

class BaseController {
  checkMongoId = checkMongoId;
}

module.exports = BaseController;
