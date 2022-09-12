const express = require('express');
const courseController = require('../controllers/course.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const courseValidator = require('../validator/course.validator');
const courseRoutes = express.Router();

// GET get all leagues
courseRoutes.get('/', courseController.getAll);

// POST create one course
courseRoutes.post(
  '/',
  hasLoggedIn,
  permissions.Course,
  courseValidator.create,
  courseController.create
);

// DELETE delete one player
courseRoutes.delete(
  '/:id',
  hasLoggedIn,
  permissions.Course,
  courseController.delete
);

// PUT update one cup
courseRoutes.put(
  '/:id',
  hasLoggedIn,
  permissions.Course,
  courseValidator.update,
  courseController.update
);

module.exports = courseRoutes;
