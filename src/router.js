const express = require('express');
const leagueRouter = require('./routes/league.route');
const Router = express.Router();

Router.use('/league', leagueRouter);

module.exports = Router;
