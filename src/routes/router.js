const express = require('express');
const publicLeagueRoute = require('./public/league/');
const adminLeagueRoute = require('./admin/league/');
const serverError = require('../middlewares/serverError');

const router = express.Router();

// public endpoints
router.use('/league', publicLeagueRoute);

// admin endpoints
router.use('/admin/league', adminLeagueRoute);

router.use(serverError);

module.exports = router;
