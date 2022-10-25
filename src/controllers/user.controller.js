const User = require('../models/user.model');
const BaseController = require('./_base.controller');

class UserController extends BaseController {
  /**
   * get Count of users
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getCount = async (req, res) => {
    const count = await User.find().count();
    this.sendResponse(res, {
      count,
    });
  };

  /**
   * get the curent user
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getMe = async (req, res) => {
    const user = { ...req.user._doc };
    delete user.password;
    this.sendResponse(res, user);
  };

  /**
   * Update user info
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  update = async (req, res) => {
    await upload(req, 'image');
    const id = req.user.id;
    const body = req.body;

    const result = await User.findByIdAndUpdate(
      id,
      {
        $set: body,
      },
      {
        new: true,
      }
    ).select('-password');
    this.sendResponse(res, result);
  };
}

const userController = new UserController();
module.exports = userController;
