const { getPermissions } = require('../config/roles.config');
const User = require('../models/user.model');
const BaseController = require('./_base.controller');

class AdminController extends BaseController {
  /**
   * Change role of the user
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  changeRole = async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.user_email });

    // not found user
    if (!user) {
      return this.sendResponse404(res);
    }

    // change role and permissions
    user.role = body.role;
    user.permissions = getPermissions(body.role);

    const result = await user.save();
    this.sendResponse(res, result);
  };

  /**
   * Change permissions of the user
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  changePermissions = async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.user_email });
    // not found user
    if (!user) {
      return this.sendResponse404(res);
    }
    // change permissions
    user.permissions = body.permissions;
    const result = await user.save();
    this.sendResponse(res, result);
  };

  /**
   * Get all users have admin-panel permission
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const result = await User.find({ permissions: 'admin-panel' }).select(
      '-password'
    );
    this.sendResponse(res, result);
  };
}

const adminController = new AdminController();
module.exports = adminController;
