const { unset, pick } = require('lodash');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const BaseController = require('./_base.controller');
class UserController extends BaseController {
  login = (req, res) => {};
  /**
   * Create one user
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  register = async (req, res) => {
    const body = req.body;
    unset(body, 'confrim_password');
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);

    const user = new User(body);
    const result = await user.save();
    const { password, ...others } = result._doc;
    this.sendResponse(res, others, 201);
  };
}

const userController = new UserController();
module.exports = userController;
