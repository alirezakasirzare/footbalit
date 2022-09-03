const express = require('express');
const leagueRoute = require('./public/league/');
const router = express.Router();

router.use('/league', leagueRoute);

module.exports = router;
