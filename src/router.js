const express = require('express');
const handleError = require('./middlewares/handleError.middleware');
const authRoutes = require('./routes/auth.routes');
const leagueRoutes = require('./routes/league.routes');
const userRoutes = require('./routes/user.routes');
const Router = express.Router();

// league routes
Router.use('/league', leagueRoutes);

// auth routes
Router.use('/auth', authRoutes);

// user routes
Router.use('/user', userRoutes);

// handle error
Router.use(handleError);

module.exports = Router;
