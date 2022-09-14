const express = require('express');
const eventController = require('../controllers/event.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const eventValidator = require('../validator/event.validator');
const eventRoutes = express.Router();

// GET get all game
eventRoutes.get('/', eventController.getAll);

// POST create one game
eventRoutes.post(
  '/',
  hasLoggedIn,
  permissions.Event,
  eventValidator.create,
  eventController.create
);

// DELETE delete one game
eventRoutes.delete(
  '/:id',
  hasLoggedIn,
  permissions.Event,
  eventController.delete
);

// PUT update one game
eventRoutes.put(
  '/:id',
  hasLoggedIn,
  permissions.Event,
  eventValidator.update,
  eventController.update
);

module.exports = eventRoutes;
