const Cup = require('../models/cup.model');
const BaseController = require('./_base.controller');

class CupController extends BaseController {
  /**
   * Create one cup
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    const body = req.body;
    const cup = new Cup(body);
    const result = await cup.save();

    this.sendResponse(res, result, 201);
  };

  /**
   * Get all cups
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const result = await Cup.find();
    this.sendResponse(res, result);
  };

  /**
   * Delete one cup
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  delete = async (req, res) => {
    const id = req.params.id;
    const result = await Cup.findByIdAndRemove(id);
    this.sendResponse(res, result);
  };

  /**
   * Update one cup
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const result = await Cup.findByIdAndUpdate(
      id,
      {
        $set: body,
      },
      {
        new: true,
      }
    );
    this.sendResponse(res, result);
  };
}

const cupController = new CupController();
module.exports = cupController;
