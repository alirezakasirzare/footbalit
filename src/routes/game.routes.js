const express = require('express');
const gameController = require('../controllers/game.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const gameValidator = require('../validator/game.validator');
const gameRoutes = express.Router();

// GET get all game
gameRoutes.get('/', gameController.getAll);

// GET count of games
gameRoutes.get(
  '/count',
  hasLoggedIn,
  permissions.Admin,
  gameController.getCount
);

// GET get one game
gameRoutes.get('/:id', gameController.getOne);

// POST create one game
gameRoutes.post(
  '/',
  hasLoggedIn,
  permissions.Game,
  gameValidator.create,
  gameController.create
);

// DELETE delete one game
gameRoutes.delete('/:id', hasLoggedIn, permissions.Game, gameController.delete);

// PUT update one game
gameRoutes.put(
  '/:id',
  hasLoggedIn,
  permissions.Game,
  gameValidator.update,
  gameController.update
);

module.exports = gameRoutes;
