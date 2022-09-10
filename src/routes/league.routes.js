const express = require('express');
const leagueController = require('../controllers/league.controller');
const {
  hasLoggedIn,
  isAdmin,
  adminRoles,
} = require('../middlewares/auth.middleware');
const leagueValidator = require('../validator/league.validator');
const leagueRoutes = express.Router();

// GET get all leagues
leagueRoutes.get('/', leagueController.getAll);

// GET get one league
leagueRoutes.get('/:id', leagueController.get);

// POST create one league
leagueRoutes.post(
  '/',
  hasLoggedIn,
  isAdmin,
  adminRoles.League,
  leagueValidator.create,
  leagueController.create
);

// DELETE delete one league
leagueRoutes.delete(
  '/:id',
  hasLoggedIn,
  isAdmin,
  adminRoles.League,
  leagueController.delete
);

// PUT update one league
leagueRoutes.put(
  '/:id',
  hasLoggedIn,
  isAdmin,
  adminRoles.League,
  leagueValidator.update,
  leagueController.update
);

module.exports = leagueRoutes;
