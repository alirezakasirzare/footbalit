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

// GET count of news
newsRoutes.get(
  '/count',
  hasLoggedIn,
  permissions.Admin,
  newsController.getCount
);

// GET all news (static)
newsRoutes.get('/all', newsController.getAllStatic);

// PUT update one team
newsRoutes.put(
  '/:id',
  hasLoggedIn,
  permissions.News,
  newsValidator.update,
  newsController.update
);

// DELETE delete one news
newsRoutes.delete('/:id', hasLoggedIn, permissions.News, newsController.delete);

// GET get one news
newsRoutes.get('/:id', newsController.getOne);

// GET all news
newsRoutes.get('/', newsController.getAll);

module.exports = newsRoutes;
