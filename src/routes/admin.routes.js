const express = require('express');
const adminController = require('../controllers/admin.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const adminValidator = require('../validator/admin.validator');
const adminRoutes = express.Router();

// PUT chnage user role
adminRoutes.put(
  '/role',
  hasLoggedIn,
  permissions.Admin,
  adminValidator.changeRole,
  adminController.changeRole
);

// PUT chnage user permissions
adminRoutes.put(
  '/permissions',
  hasLoggedIn,
  permissions.Admin,
  adminValidator.changePermissions,
  adminController.changePermissions
);

// GET get all admins
adminRoutes.get('/', hasLoggedIn, permissions.Admin, adminController.getAll);

module.exports = adminRoutes;
