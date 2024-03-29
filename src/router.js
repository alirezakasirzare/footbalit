const express = require('express');
const handleError = require('./middlewares/handleError.middleware');
const authRoutes = require('./routes/auth.routes');
const leagueRoutes = require('./routes/league.routes');
const adminRoutes = require('./routes/admin.routes');
const teamRoutes = require('./routes/team.routes');
const playerRoutes = require('./routes/player.routes');
const cupRoutes = require('./routes/cup.routes');
const courseRoutes = require('./routes/course.routes');
const gameRoutes = require('./routes/game.routes');
const eventRoutes = require('./routes/event.routes');
const searchRoutes = require('./routes/search.routes');
const newsRoutes = require('./routes/news.routes');
const commentRoutes = require('./routes/comment.routes');
const userRoutes = require('./routes/user.routes');
const Router = express.Router();

// league routes
Router.use('/league', leagueRoutes);

// user routes
Router.use('/user', userRoutes);

// search routes
Router.use('/search', searchRoutes);

// team routes
Router.use('/team', teamRoutes);

// player routes
Router.use('/player', playerRoutes);

// cup routes
Router.use('/cup', cupRoutes);

// course routes
Router.use('/course', courseRoutes);

// game routes
Router.use('/game', gameRoutes);

// event routes
Router.use('/event', eventRoutes);

// news routes
Router.use('/news', newsRoutes);

// comment routes
Router.use('/comment', commentRoutes);

// auth routes
Router.use('/auth', authRoutes);

// admin routes
Router.use('/admin', adminRoutes);

// handle error
Router.use(handleError);

module.exports = Router;
