const League = require('../models/league.model');
const BaseController = require('./_base.controller');

class LeagueController extends BaseController {
  /**
   * Get all leagues
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const result = await League.find();
    this.sendResponse(res, result);
  };

  /**
   * Get one league
   *
   * can show relation teams with set query get_teams=true
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  get = async (req, res) => {
    const id = req.params.id;
    const getTeams = req.query.get_teams;

    let getTeamsQuery = [];

    // handle get_team query
    if (getTeams == 'true') {
      getTeamsQuery = [
        {
          $addFields: {
            leagueId: {
              $toObjectId: '$_id',
            },
          },
        },
        {
          $lookup: {
            from: 'teams',
            localField: 'leagueId',
            foreignField: 'league',
            as: 'teams',
          },
        },
        {
          $unset: 'leagueId',
        },
      ];
    }

    let query = [
      {
        $match: {
          _id: id,
        },
      },
    ];
    query = query.concat(getTeamsQuery);
    let result = await League.aggregate(query);
    result = result.length > 0 ? result[0] : null;
    this.sendResponse(res, result);
  };

  /**
   * Delete one league
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
   * Create one league
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    const body = req.body;
    const league = new League(body);
    const result = await league.save();
    this.sendResponse(res, result, 201);
  };

  /**
   * Update one league
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
