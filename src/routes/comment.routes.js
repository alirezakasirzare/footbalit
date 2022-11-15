const express = require('express');
const commentController = require('../controllers/comment.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const commentValidator = require('../validator/comment.validator');
const commentRoutes = express.Router();

// POST create one team
commentRoutes.post(
  '/',
  hasLoggedIn,
  commentValidator.create,
  commentController.create
);

// PUT update one team
commentRoutes.put(
  '/:id',
  hasLoggedIn,
  commentValidator.update,
  commentController.update
);

// GET count of comments
commentRoutes.get(
  '/count',
  hasLoggedIn,
  permissions.Admin,
  commentController.getCount
);

// GET all enws
commentRoutes.get('/', commentController.getAll);

module.exports = commentRoutes;
