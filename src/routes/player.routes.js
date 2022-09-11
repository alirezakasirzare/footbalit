const express = require('express');
const playerController = require('../controllers/player.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const playerValidator = require('../validator/player.validator');
const playerRoutes = express.Router();

// GET get all leagues
playerRoutes.get('/', playerController.getAll);

// GET get one league
playerRoutes.get('/:id', playerController.getOne);

// POST create one player
playerRoutes.post(
  '/',
  hasLoggedIn,
  permissions.Player,
  playerValidator.create,
  playerController.create
);

// DELETE delete one player
playerRoutes.delete(
  '/:id',
  hasLoggedIn,
  permissions.Player,
  playerController.delete
);

// PUT update one player
playerRoutes.put(
  '/:id',
  hasLoggedIn,
  permissions.Player,
  playerValidator.update,
  playerController.update
);

module.exports = playerRoutes;
