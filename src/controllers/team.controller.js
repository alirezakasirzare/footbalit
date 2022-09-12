const Team = require('../models/team.model');
const { getOneItem, createLookupMatchId } = require('../utils/query.helper');
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
    const {
      get_player: getPlayer,
      get_league: getLeague,
      get_cups: getCups,
    } = req.query;

    // create query with handle get_player query
    const query = createLookupMatchId(
      id,
      'teamId',
      'team',
      'players',
      getPlayer
    );

    let result = await Team.aggregate(query);
    let singleResult = getOneItem(result);

    // handle get_league query
    if (getLeague == 'true' && singleResult) {
      singleResult = Team.populate(singleResult, { path: 'league' });
    }

    // handle get_cups query
    if (getCups == 'true' && singleResult) {
      singleResult = Team.populate(singleResult, { path: 'cups' });
    }

    const finalResult = await singleResult;
    this.sendResponse(res, finalResult);
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
