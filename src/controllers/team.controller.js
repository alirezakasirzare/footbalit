const Team = require('../models/team.model');
const { createPartLookupId } = require('../utils/query.helper');
const { checkObjectId } = require('../utils/validate.helper');
const BaseController = require('./_base.controller');

class TeamController extends BaseController {
  /**
   * Create one team
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    const body = req.body;
    const team = new Team(body);
    const result = await team.save();

    this.sendResponse(res, result, 201);
  };

  /**
   * Get one team
   *
   * can get league too with set query get_league=true
   * can get players too with set query get_player=true
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getOne = async (req, res) => {
    const id = req.params.id;
    const getPlayer = req.query.get_player;
    const getLeague = req.query.get_league;

    // handle get_player query
    let getPlayerQuery = [];
    if (getPlayer == 'true') {
      getPlayerQuery = createPartLookupId('teamId', 'team', 'players');
    }

    // execute query
    let query = [
      {
        $match: {
          _id: id,
        },
      },
    ];
    query = query.concat(getPlayerQuery);
    let result = await Team.aggregate(query);
    result = result.length > 0 ? result[0] : null;

    // handle get_league query
    if (getLeague == 'true' && result) {
      result = await Team.populate(result, { path: 'league' });
    }
    this.sendResponse(res, result);
  };

  /**
   * Get all teams
   *
   * can get filter by league with set query league
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const leagueId = req.query.league;

    let queryFilter = {};
    if (checkObjectId(leagueId)) {
      queryFilter.league = leagueId;
    }
    const result = await Team.find(queryFilter);
    this.sendResponse(res, result);
  };

  /**
   * Delete one team
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  delete = async (req, res) => {
    const id = req.params.id;
    const result = await Team.findByIdAndRemove(id);
    this.sendResponse(res, result);
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
    const result = await Team.findByIdAndUpdate(
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

const teamController = new TeamController();
module.exports = teamController;
