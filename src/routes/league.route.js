const express = require('express');
const leagueController = require('../controllers/league.controller');
const leagueValidator = require('../validator/league.validator');
const leagueRoutes = express.Router();
// * /users:
// *   get:
// *     summary: Retrieve a list of JSONPlaceholder users
// *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.

// routes/users.js

/**
 * @openapi
 * {
 *    "/users:":{
 *        "get": {
 *          "summary": "Retrieve a list of JSONPlaceholder users",
 *          "description": "description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API."
 *        }
 *    }
 * }
 *
 * {
 *     slam: {
 *   }
 * }
 */
leagueRoutes.get('/', leagueController.getAll);
leagueRoutes.post('/', leagueValidator.create, leagueController.create);
leagueRoutes.get('/:id', leagueController.get);
leagueRoutes.delete('/:id', leagueController.delete);
leagueRoutes.put('/:id', leagueValidator.update, leagueController.update);

module.exports = leagueRoutes;
