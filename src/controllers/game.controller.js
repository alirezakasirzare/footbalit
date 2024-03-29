const Event = require('../models/event.model');
const Game = require('../models/game.model');
const League = require('../models/league.model');
const LeagueInfo = require('../models/leagueInfo.model');
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

    // league
    const league = await League.findById(body.league);

    // game
    const game = new Game({ ...body, course: league.course });
    const result = await game.save();

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

    // if status is ended so return
    const game = await Game.findById(id);
    if (game && game.status == 'ended') {
      const msg =
        'این بازی تمام شده است و دیگر نمیتوانید آن را به روز رسانی کنید';
      return this.sendResponseMsg(res, msg, 400);
    }

    // asing body to game document
    for (let key in body) {
      const value = body[key];
      game && (game[key] = value);
    }

    // if status is ended so add the ended info to game
    if (game && game.status == 'ended') {
      const events = await Event.find({ game: game.id });
      let teamOneScore = 1;
      let teamTwoScore = 1;

      // handel goals
      events.forEach((event) => {
        if (
          event.type == 'goal' ||
          (event.type == 'penalty' && event.data.goaled == true)
        ) {
          game[
            game.team_one.equals(event.team)
              ? 'team_one_goals'
              : 'team_two_goals'
          ] += 1;
        }
      });

      // handel winner
      if (game.team_one_goals > game.team_two_goals) {
        game.winner = game.team_one;
        teamOneScore = 3;
        teamTwoScore = 0;
      } else if (game.team_one_goals < game.team_two_goals) {
        game.winner = game.team_two;
        teamOneScore = 0;
        teamTwoScore = 3;
      }

      // handle league info
      await LeagueInfo.findOneAndUpdate(
        { league: game.league, course: game.course, team: game.team_one },
        {
          $inc: {
            goals_scored: game.team_one_goals,
            score_received: game.team_two_goals,
            score: teamOneScore,
          },
        },
        {
          upsert: true,
        }
      );

      await LeagueInfo.findOneAndUpdate(
        { league: game.league, course: game.course, team: game.team_two },
        {
          $inc: {
            goals_scored: game.team_two_goals,
            score_received: game.team_one_goals,
            score: teamTwoScore,
          },
        },
        {
          upsert: true,
        }
      );
    }

    // save document
    const result = game && (await game.save());
    this.sendResponse(res, result);
  };

  /**
   * get Count of games
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getCount = async (req, res) => {
    const count = await Game.find().count();
    this.sendResponse(res, {
      count,
    });
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

    const startDate = Math.ceil(timedDate / oneDay) * oneDay;
    const endDate = Math.ceil((timedDate + oneDay) / oneDay) * oneDay;

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
