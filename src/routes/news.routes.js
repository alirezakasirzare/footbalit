const express = require('express');
const newsController = require('../controllers/news.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const newsValidator = require('../validator/news.validator');
const newsRoutes = express.Router();

// POST create one team
newsRoutes.post(
  '/',
  hasLoggedIn,
  permissions.News,
  newsValidator.create,
  newsController.create
);

// PUT update one team
newsRoutes.put(
  '/:id',
  hasLoggedIn,
  permissions.News,
  newsValidator.update,
  newsController.update
);

// DELETE delete one team
newsRoutes.delete('/:id', hasLoggedIn, permissions.News, newsController.delete);

// GET get one team
newsRoutes.get('/:id', newsController.getOne);

// GET all enws
newsRoutes.get('/', newsController.getAll);

module.exports = newsRoutes;
