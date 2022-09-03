const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.post('/', controller.createLeague);
router.put('/:id', controller.updateLeague);
router.delete('/:id', controller.deleteLeague);

module.exports = router;
