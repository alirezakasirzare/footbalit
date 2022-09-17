const Player = require('../models/player.model');
const { checkObjectId } = require('../utils/validate.helper');
const BaseController = require('./_base.controller');
const upload = require('../services/fileUpload.service');

class PlayerController extends BaseController {
  /**
   * Create one player
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    await upload(req, 'image');
    const body = req.body;

    const player = new Player(body);
    const result = await player.save();

    this.sendResponse(res, result, 201);
  };

  /**
   * Get one player
   *
   * can get team too with set query get_team=true
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getOne = async (req, res) => {
    const id = req.params.id;
    const getTeam = req.query.get_team;

    let query = Player.findById(id);
    if (getTeam == 'true') {
      query = query.populate('team');
    }
    const result = await query;
    this.sendResponse(res, result);
  };

  /**
   * Get all players
   *
   * can get filter by team with set query team
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const teamId = req.query.team;

    let queryFilter = {};
    if (checkObjectId(teamId)) {
      queryFilter.team = teamId;
    }
    const result = await Player.find(queryFilter);
    this.sendResponse(res, result);
  };

  /**
   * Delete one player
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  delete = async (req, res) => {
    const id = req.params.id;
    const result = await Player.findByIdAndRemove(id);
    this.sendResponse(res, result);
  };

  /**
   * Update one player
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  update = async (req, res) => {
    await upload(req, 'image');
    const id = req.params.id;
    const body = req.body;

    const result = await Player.findByIdAndUpdate(
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

const playerController = new PlayerController();
module.exports = playerController;
