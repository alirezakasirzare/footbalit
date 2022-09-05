const express = require('express');
const idValidator = require('../../../middlewares/idValidator');
const controller = require('./controller');
const validator = require('./validator');
const router = express.Router();

router.post('/', validator.createLeague, controller.createLeague);
router.put(
  '/:id',
  idValidator,
  validator.updateLeague,
  controller.updateLeague
);
router.delete('/:id', idValidator, controller.deleteLeague);

module.exports = router;
