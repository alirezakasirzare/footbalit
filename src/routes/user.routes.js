const express = require('express');
const userController = require('../controllers/user.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const userValidator = require('../validator/user.validator');
const userRoutes = express.Router();

// PUT update user
userRoutes.put('/', hasLoggedIn, userValidator.update, userController.update);

// GET get all admins
userRoutes.get(
  '/count',
  hasLoggedIn,
  permissions.Admin,
  userController.getCount
);

// GET get my data
userRoutes.get('/me', hasLoggedIn, userController.getMe);

module.exports = userRoutes;
