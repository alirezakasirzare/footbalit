const express = require('express');
const leagueController = require('../controllers/league.controller');
const leagueValidator = require('../validator/league.validator');
const leagueRoutes = express.Router();

// GET get all leagues
leagueRoutes.get('/', leagueController.getAll);

// GET get one league
leagueRoutes.get('/:id', leagueController.get);

// POST create one league
leagueRoutes.post('/', leagueValidator.create, leagueController.create);

// DELETE delete one league
leagueRoutes.delete('/:id', leagueController.delete);

// PUT update one league
leagueRoutes.put('/:id', leagueValidator.update, leagueController.update);

module.exports = leagueRoutes;
