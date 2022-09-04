const express = require('express');
const idValidator = require('../../../middlewares/validator');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.getAllLeagues);
router.get('/:id', idValidator, controller.getOneLeague);

module.exports = router;
