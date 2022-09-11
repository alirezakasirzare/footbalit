const express = require('express');
const handleError = require('./middlewares/handleError.middleware');
const authRoutes = require('./routes/auth.routes');
const leagueRoutes = require('./routes/league.routes');
const adminRoutes = require('./routes/admin.routes');
const teamRoutes = require('./routes/team.routes');
const Router = express.Router();

// league routes
Router.use('/league', leagueRoutes);

// team routes
Router.use('/team', teamRoutes);

// auth routes
Router.use('/auth', authRoutes);

// admin routes
Router.use('/admin', adminRoutes);

// handle error
Router.use(handleError);

module.exports = Router;
