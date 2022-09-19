const express = require('express');
const searchController = require('../controllers/search.controller');
const searchRoutes = express.Router();

// GET search between multiple models
searchRoutes.get('/:text', searchController.search);

module.exports = searchRoutes;
