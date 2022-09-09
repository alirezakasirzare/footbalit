const express = require('express');
const authController = require('../controllers/auth.controller');
const authValidator = require('../validator/auth.validator');
const authRoutes = express.Router();

// POST login to account
authRoutes.post('/login', authValidator.login, authController.login);

// POST register user
authRoutes.post('/register', authValidator.register, authController.register);

module.exports = authRoutes;
