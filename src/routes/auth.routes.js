const express = require('express');
const authController = require('../controllers/auth.controller');
const authValidator = require('../validator/auth.validator');
const authRoutes = express.Router();

// POST login to account
authRoutes.post('/login', authValidator.login, authController.login);

// POST register user
authRoutes.post('/register', authValidator.register, authController.register);

// POST send code for email
authRoutes.post('/send-code', authValidator.sendCode, authController.sendCode);

// POST validate email
authRoutes.post(
  '/validate-email',
  authValidator.checkCode,
  authController.validateEmail
);

// POST check code sended for email
authRoutes.post(
  '/check-code',
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
