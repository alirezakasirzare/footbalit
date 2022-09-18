const { unset } = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const BaseController = require('./_base.controller');
const Code = require('../models/code.model');

class AuthController extends BaseController {
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
      return this.sendResponseMsg(res, msg, 400);
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

  /**
   * send code for forget password
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  sendCode = async (req, res) => {
    const body = req.body;

    // user not found
    const user = await User.findOne({
      email: body.email,
    });
    if (!user) {
      const data = {
        email: 'کاربری با این ایمیل یافت نشد',
      };
      return this.sendResponse(res, data, 404);
    }

    // save code
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    body.code = randomCode;

    await Code.findOneAndUpdate(
      { email: body.email },
      {
        code: randomCode,
      },
      {
        upsert: true,
      }
    );

    const msg = 'کد با موفقیت برای این ایمیل ارسال شد';
    this.sendResponseMsg(res, msg, 200);
  };

  /**
   * check code for forget password
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  checkCode = async (req, res) => {
    const body = req.body;

    // code not found
    const code = await Code.findOne(body);
    if (!code) {
      const data = {
        code: 'کد نادرست است',
      };
      return this.sendResponse(res, data, 400);
    }

    // code is true
    const msg = 'کد درست است';
    this.sendResponseMsg(res, msg, 200);
  };

  /**
   * forget password
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  forgetPassword = async (req, res) => {
    const body = req.body;

    // code not found
    const code = await Code.findOneAndDelete({
      email: body.email,
      code: body.code,
    });
    if (!code) {
      const data = {
        code: 'کد نادرست است',
      };
      return this.sendResponse(res, data, 400);
    }

    // hash password
    const salt = await bcrypt.genSalt(this.bcryptSaltValue);
    body.password = await bcrypt.hash(body.password, salt);

    // execute query
    const result = await User.findOneAndUpdate(
      {
        email: body.email,
      },
      {
        password: body.password,
      }
    );

    const { password, ...others } = result._doc;
    this.sendResponse(res, others, 200);
  };
}

const authController = new AuthController();
module.exports = authController;
