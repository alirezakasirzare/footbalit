const express = require('express');
const cupController = require('../controllers/cup.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const cupValidator = require('../validator/cup.validator');
const cupRoutes = express.Router();

// GET get all leagues
cupRoutes.get('/', cupController.getAll);

// POST create one player
cupRoutes.post(
  '/',
  hasLoggedIn,
  permissions.Cup,
  cupValidator.create,
  cupController.create
);

// DELETE delete one player
cupRoutes.delete('/:id', hasLoggedIn, permissions.Cup, cupController.delete);

// PUT update one cup
cupRoutes.put(
  '/:id',
  hasLoggedIn,
  permissions.Cup,
  cupValidator.update,
  cupController.update
);

module.exports = cupRoutes;
