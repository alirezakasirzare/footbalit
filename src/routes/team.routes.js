const express = require('express');
const teamController = require('../controllers/team.controller');
const { hasLoggedIn, permissions } = require('../middlewares/auth.middleware');
const teamValidator = require('../validator/team.validator');
const teamRoutes = express.Router();

// POST create one team
teamRoutes.post(
  '/',
  hasLoggedIn,
  permissions.Team,
  teamValidator.create,
  teamController.create
);

// PUT update one team
teamRoutes.put(
  '/:id',
  hasLoggedIn,
  permissions.Team,
  teamValidator.update,
  teamController.update
);

// DELETE delete one team
teamRoutes.delete('/:id', hasLoggedIn, permissions.Team, teamController.delete);

// GET get one teams
teamRoutes.get('/:id', teamController.getOne);

// GET create all teams
teamRoutes.get('/', teamController.getAll);

module.exports = teamRoutes;
