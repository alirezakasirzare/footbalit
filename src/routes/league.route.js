const express = require('express');
const leagueController = require('../controllers/league.controller');
const leagueValidator = require('../validator/league.validator');
const leagueRoutes = express.Router();

leagueRoutes.get('/', leagueController.getAll);
leagueRoutes.post('/', leagueValidator.create, leagueController.create);
leagueRoutes.get('/:id', leagueController.get);
leagueRoutes.delete('/:id', leagueController.delete);
leagueRoutes.put('/:id', leagueValidator.update, leagueController.update);

module.exports = leagueRoutes;
