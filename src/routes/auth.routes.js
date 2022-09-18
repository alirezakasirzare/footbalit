const express = require('express');
const authController = require('../controllers/auth.controller');
const authValidator = require('../validator/auth.validator');
const authRoutes = express.Router();

// POST login to account
authRoutes.post('/login', authValidator.login, authController.login);

// POST register user
authRoutes.post('/register', authValidator.register, authController.register);

// POST send code for forget password feature
authRoutes.post(
  '/forget-password/send-code',
  authValidator.sendCode,
  authController.sendCode
);

// POST check code for forget password feature
authRoutes.post(
  '/forget-password/check-code',
  authValidator.checkCode,
  authController.checkCode
);

// POST forget password - finall step
authRoutes.post(
  '/forget-password',
  authValidator.forgetPassword,
  authController.forgetPassword
);

module.exports = authRoutes;
