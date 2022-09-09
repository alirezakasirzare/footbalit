const User = require('../models/user.model');
const BaseController = require('./_base.controller');

class UsertController extends BaseController {
  login = (req, res) => {};

  register = (req, res) => {};
}

const userController = new UsertController();
module.exports = userController;
