const express = require('express');
const controller = require('./controller');
const { createLeague: createLeagueValidator } = require('./validator');
const router = express.Router();

router.get('/', controller.getAllLeagues);
router.get('/:id', controller.getOneLeague);

router.post('/', createLeagueValidator, controller.createLeague);

router.put('/:id', controller.editOneLeague);

router.delete('/:id', controller.deleteOneLeague);

module.exports = router;
