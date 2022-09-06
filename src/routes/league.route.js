const express = require('express');
const leagueController = require('../controllers/league.controller');
const leagueValidation = require('../validations/league.validation');
const leagueRouter = express.Router();

leagueRouter.get('/', leagueController.getAll);
leagueRouter.post('/', leagueController.create);
leagueRouter.get('/:id', leagueController.get);
leagueRouter.delete('/:id', leagueController.delete);
leagueRouter.put('/:id', leagueController.update);

module.exports = leagueRouter;
