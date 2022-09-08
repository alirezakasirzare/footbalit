const express = require('express');
const leagueController = require('../controllers/league.controller');
const leagueValidator = require('../validator/league.validator');
const leagueRoutes = express.Router();

// GET get all leauges
leagueRoutes.get('/', leagueController.getAll);

// GET get one leauge
leagueRoutes.get('/:id', leagueController.get);

// POST create one leauge
leagueRoutes.post('/', leagueValidator.create, leagueController.create);

// DELETE delete one leauge
leagueRoutes.delete('/:id', leagueController.delete);

// PUT update one leauge
leagueRoutes.put('/:id', leagueValidator.update, leagueController.update);

module.exports = leagueRoutes;
