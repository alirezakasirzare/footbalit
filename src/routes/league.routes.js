const express = require('express');
const leagueController = require('../controllers/league.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const leagueValidator = require('../validator/league.validator');
const leagueRoutes = express.Router();

// GET get all leagues
leagueRoutes.get('/', leagueController.getAll);

// GET count of leagues
leagueRoutes.get(
  '/count',
  hasLoggedIn,
  permissions.Admin,
  leagueController.getCount
);

// GET get one league
leagueRoutes.get('/:id', leagueController.getOne);

// POST create one league
leagueRoutes.post(
  '/',
  hasLoggedIn,
  permissions.League,
  leagueValidator.create,
  leagueController.create
);

// DELETE delete one league
leagueRoutes.delete(
  '/:id',
  hasLoggedIn,
  permissions.League,
  leagueController.delete
);

// PUT update one league
leagueRoutes.put(
  '/:id',
  hasLoggedIn,
  permissions.League,
  leagueValidator.update,
  leagueController.update
);

module.exports = leagueRoutes;
