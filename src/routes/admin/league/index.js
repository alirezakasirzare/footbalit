const express = require('express');
const idValidator = require('../../../middlewares/validator');
const controller = require('./controller');
const router = express.Router();

router.post('/', controller.createLeague);
router.put('/:id', idValidator, controller.updateLeague);
router.delete('/:id', idValidator, controller.deleteLeague);

module.exports = router;
