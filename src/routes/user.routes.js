const express = require('express');
const userController = require('../controllers/user.controller');
const userValidator = require('../validator/user.validator');
const userRoutes = express.Router();

module.exports = userRoutes;
