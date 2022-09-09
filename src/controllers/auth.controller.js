const { unset } = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const BaseController = require('./_base.controller');

class UserController extends BaseController {
  // for bcrypt
  bcryptSaltValue = 10;
  /**
   * Login user, return jwt token
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  login = async (req, res) => {
    const body = req.body;

    const user = await User.findOne({
      email: body.email,
    });
    // user not found
    const matchPassword = await bcrypt.compare(body.password, user.password);
    if (!user || !matchPassword) {
      const msg = 'ایمیل یا رمز اشتباه است';
      return this.sendResponseMeg(res, msg, 400);
    }

    // send token
    const jwtKey = process.env.JWT;
    const token = jwt.sign({ id: user.id }, jwtKey);
    const data = { token };
    this.sendResponse(res, data);
  };
  /**
   * Create one user
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  register = async (req, res) => {
    const body = req.body;
    unset(body, 'confrim_password');

    // email exist
    const existUser = await User.findOne({
      email: body.email,
    });
    if (existUser) {
      const data = { email: 'ایمیل تکراری است' };
      return this.sendResponse(res, data, 400);
    }

    // create user
    const salt = await bcrypt.genSalt(this.bcryptSaltValue);
    body.password = await bcrypt.hash(body.password, salt);

    const user = new User(body);
    const result = await user.save();
    const { password, ...others } = result._doc;
    this.sendResponse(res, others, 201);
  };
}

const userController = new UserController();
module.exports = userController;
