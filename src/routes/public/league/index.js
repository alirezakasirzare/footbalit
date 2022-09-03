const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.getAllLeagues);
router.get('/:id', controller.getOneLeague);

module.exports = router;
