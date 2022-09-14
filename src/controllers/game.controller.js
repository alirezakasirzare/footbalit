const Game = require('../models/game.model');
const BaseController = require('./_base.controller');

class GameController extends BaseController {
  /**
   * Create one game
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    const body = req.body;
    const cup = new Game(body);
    const result = await cup.save();

    this.sendResponse(res, result, 201);
  };

  /**
   * Delete one game
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  delete = async (req, res) => {
    const id = req.params.id;
    const result = await Game.findByIdAndRemove(id);
    this.sendResponse(res, result);
  };

  /**
   * Update one game
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const result = await Game.findByIdAndUpdate(
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

  /**
   * Get one game
   *
   * can show league by set query get_league=true
   * can show course by set query get_course=true
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getOne = async (req, res) => {
    const id = req.params.id;
    let { get_league: getLeague, get_course: getCourse } = req.query;

    const query = Game.findById(id).populate('team_one').populate('team_two');

    // handle get_league query
    if (getLeague == 'true') {
      query.populate('league');
    }

    // handle get_course query
    if (getCourse == 'true') {
      query.populate('course');
    }

    // execute query
    const result = await query;
    this.sendResponse(res, result);
  };

  /**
   * Get all games and sort by date
   *
   * can filter by date with set date=2020-04-03 by default get today games
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    let date = req.query.date;

    // handle date query
    const oneDay = 24 * 60 * 60 * 1000;
    const timedDate = date ? new Date(date).getTime() : new Date().getTime();

    const startDate = Math.floor(timedDate / oneDay) * oneDay;
    const endDate = Math.floor((timedDate + oneDay) / oneDay) * oneDay;

    // execute query
    const result = await Game.find({
      date: {
        $gte: startDate,
        $lt: endDate,
      },
    })
      .sort({ date: 1 })
      .populate('team_one')
      .populate('team_two');

    this.sendResponse(res, result);
  };
}

const gameController = new GameController();
module.exports = gameController;
