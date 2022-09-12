const League = require('../models/league.model');
const { createLookupMatchId, getOneItem } = require('../utils/query.helper');
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
   * can show curent course with set query get_course=true
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getOne = async (req, res) => {
    const id = req.params.id;
    const { get_teams: getTeams, get_course: getCourse } = req.query;

    // create query with handle get_team query
    const query = createLookupMatchId(
      id,
      'leagueId',
      'league',
      'teams',
      getTeams
    );

    const result = await League.aggregate(query);
    let singleResult = getOneItem(result);

    // handle get_course query
    if (getCourse == 'true' && singleResult) {
      singleResult = await League.populate(singleResult, { path: 'course' });
    }

    this.sendResponse(res, singleResult);
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
