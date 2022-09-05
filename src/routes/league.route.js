const express = require('express');
const leagueController = require('../controllers/league.controller');
const leagueValidation = require('../validations/league.validation');
const leagueRouter = express.Router();

leagueRouter.get('/', leagueController.getAll);
leagueRouter.get('/:id', leagueController.get);
leagueRouter.delete('/:id', leagueController.delete);

module.exports = leagueRouter;
