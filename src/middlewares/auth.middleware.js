const jwt = require('jsonwebtoken');
const { split, includes } = require('lodash');
const User = require('../models/user.model');
const { errorResponse } = require('../utils/structureResponse.helper');

// handle 401 errors

/**
 * Send unauthorized response to client
 *
 * @param {Object} res - express next
 */
const unauthorizedResponse = (res) => {
  const error = {
    _message: 'ابتدا وارد حساب کاربری خود شوید',
  };
  const response = errorResponse(error);
  res.status(401).json(response);
};

/**
 * Get the token from Authorization header
 *
 * @param {Object} header - Authorization header request
 */
const getToken = (header) => {
  const headerSplited = split(header, ' ');
  let token = false;
  if (headerSplited[0] === 'Bearer' && headerSplited[1]) {
    token = headerSplited[1];
  }

  return token;
};

/**
 * Check the user is logged in account, if not send error
 *
 * @param {Object} req - express request
 * @param {Object} res - express response
 * @param {Function} next - express next
 */
const hasLoggedIn = async (req, res, next) => {
  const token = getToken(req.header('Authorization'));
  if (!token) {
    return unauthorizedResponse(res);
  }

  try {
    const jwtKey = process.env.JWT;
    let { id } = jwt.verify(token, jwtKey);
    const user = await User.findById(id);
    if (!user) {
      return unauthorizedResponse(res);
    }
    req.user = user;
    next();
  } catch {
    return unauthorizedResponse(res);
  }
};

// handle 403 errord

/**
 * Send forbidden response to client
 *
 * @param {Object} res - express next
 */
const forbiddenResponse = (res) => {
  const error = {
    _message: 'شما به این بخش دسترسی ندارید',
  };
  const response = errorResponse(error);
  res.status(403).json(response);
};

/**
 * return middleware for check this user has this permission or not
 *
 * @param {permission} permission - rule of we expected
 */
const permissionGenerator = (permission) => {
  const permissionMiddleware = (req, res, next) => {
    const permissions = req.user.permissions;
    if (!includes(permissions, permission)) {
      return forbiddenResponse(res);
    }

    next();
  };

  return permissionMiddleware;
};

module.exports = {
  hasLoggedIn,
  permissions: {
    League: permissionGenerator('League'),
    Admin: permissionGenerator('Admin'),
    Team: permissionGenerator('Team'),
    Player: permissionGenerator('Player'),
    Cup: permissionGenerator('Cup'),
    Course: permissionGenerator('Course'),
    Game: permissionGenerator('Game'),
    Event: permissionGenerator('Event'),
  },
};
