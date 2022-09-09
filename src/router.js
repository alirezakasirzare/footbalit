const express = require('express');
const handleError = require('./middlewares/handleError.middleware');
const leagueRoutes = require('./routes/league.routes');
const Router = express.Router();

// league endpoint
Router.use('/league', leagueRoutes);

// handle error
Router.use(handleError);

module.exports = Router;
