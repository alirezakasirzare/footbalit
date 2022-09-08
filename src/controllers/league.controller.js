const League = require('../models/league.model');
const BaseController = require('./_base.controller');

class LeagueController extends BaseController {
  /**
   * Get all leauges
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const result = await League.find();
    this.sendResponse(res, result);
  };

  /**
   * Get one leauge
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  get = async (req, res) => {
    const id = req.params.id;
    const result = await League.findById(id);
    this.sendResponse(res, result);
  };

  /**
   * Delete one leauge
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  delete = async (req, res) => {
    const id = req.params.id;
    const result = await League.findByIdAndRemove(id);
    this.sendResponse(res, result);
  };

  /**
   * Create one leauge
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    const body = req.body;
    const leauge = new League(body);
    const result = await leauge.save();
    this.sendResponse(res, result, 201);
  };

  /**
   * Update one leauge
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const result = await League.findByIdAndUpdate(
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

const leagueController = new LeagueController();
module.exports = leagueController;
