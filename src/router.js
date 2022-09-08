const express = require('express');
const handleError = require('./middlewares/handleError.middleware');
const leagueRoutes = require('./routes/league.routes');
const Router = express.Router();

Router.use('/league', leagueRoutes);
Router.use(handleError);

module.exports = Router;
