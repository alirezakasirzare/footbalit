const express = require('express');
const leagueRoutes = require('./routes/league.route');
const Router = express.Router();

Router.use('/league', leagueRoutes);

module.exports = Router;
