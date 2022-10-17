const Team = require('../models/team.model');
const League = require('../models/league.model');
const { checkObjectId } = require('../utils/validate.helper');
const BaseController = require('./_base.controller');
const upload = require('../services/fileUpload.service');

class TeamController extends BaseController {
  /**
   * Create one team
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    await upload(req, 'image');
    const body = req.body;

    const team = new Team(body);
    const result = await team.save();

    this.sendResponse(res, result, 201);
  };

  /**
   * Get one team
   *
   * can get league too with set query get_league=true
   * can get cups too with set query get_cups=true
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getOne = async (req, res) => {
    const id = req.params.id;
    const { get_league: getLeague, get_cups: getCups } = req.query;

    let query = Team.findById(id);

    // handle get_league query
    if (getLeague == 'true') {
      query = query.populate('league');
    }

    // handle get_cups query
    if (getCups == 'true') {
      query = query.populate('cups');
    }

    // execute query
    const result = await query;
    this.sendResponse(res, result);
  };

  /**
   * Get all teams
   *
   * can get filter by league with set query league
   * can get info with set get_info query
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const { league: leagueId, get_info: getInfo } = req.query;

    let queryFilter = [
      {
        $project: {
          persian_name: 1,
          english_name: 1,
          image: 1,
          league: 1,
        },
      },
    ];

    // handle league query
    if (checkObjectId(leagueId)) {
      queryFilter.push({
        $match: {
          league: leagueId,
        },
      });
    }

    // handle get_info query
    if (getInfo == 'true') {
      const league = await League.findById(leagueId);
      const course = league && league.course;

      queryFilter.push({
        $lookup: {
          from: 'leagueinfos',
          localField: '_id',
          foreignField: 'team',
          as: 'info',
        },
      });

      queryFilter.push({
        $addFields: {
          info: {
            $arrayElemAt: ['$info', 0],
          },
        },
      });

      queryFilter.push({
        $addFields: {
          info: {
            $cond: [{ $eq: ['$info.course', course] }, '$info', '$$REMOVE'],
          },
        },
      });
    }

    const reault = await Team.aggregate(queryFilter);
    this.sendResponse(res, reault);
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
    await upload(req, 'image');
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
