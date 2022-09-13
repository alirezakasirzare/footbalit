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
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getOne = async (req, res) => {
    const id = req.params.id;
    const result = await Game.findById(id)
      .populate('team_one')
      .populate('team_two');
    this.sendResponse(res, result);
  };

  /**
   * Get all games
   *
   * can filter by date with set days=3,4 three day before and four day after (with today)
   * by default it is 5,6
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    let date = req.query.days;

    // handle days query
    date = date.split(',');
    const queryStartsDay = parseInt(date[0] || 5);
    const queryEndsDay = parseInt(date[1] || 6);
    const cureentDate = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;

    let startDate = cureentDate - oneDay * queryStartsDay;
    startDate = Math.floor(startDate / oneDay) * oneDay;

    let endDate = cureentDate + oneDay * queryEndsDay;
    endDate = Math.floor(endDate / oneDay) * oneDay;

    // exequte query
    const result = await Game.find({
      date: {
        $gte: startDate,
        $lt: endDate,
      },
    })
      // .sort({ date: 1 })
      .populate('team_one')
      .populate('team_two');
    // let result = await Game.aggregate([
    //   {
    //     $match: {
    //       date: {
    //         $gte: new Date(startDate),
    //         $lt: new Date(endDate),
    //       },
    //     },
    //   },
    //   { $sort: { date: 1 } },
    //   {
    //     $group: {
    //       _id: {
    //         year: { $year: '$date' },
    //         month: { $month: '$date' },
    //         day: { $dayOfMonth: '$date' },
    //         formattedDateString: {
    //           $dateToString: {
    //             format: '%Y-%m-%d',
    //             date: '$date',
    //           },
    //         },
    //       },
    //       data: { $push: '$$ROOT' },
    //       count: { $sum: 1 },
    //     },
    //   },
    //   {
    //     $project: {
    //       datetime: {
    //         $concat: [
    //           {
    //             $substr: ['$_id.year', 0, -1],
    //           },
    //           '-',
    //           {
    //             $substr: ['$_id.month', 0, -1],
    //           },
    //           '-',
    //           {
    //             $substr: ['$_id.day', 0, -1],
    //           },
    //         ],
    //       },
    //       data: 1,
    //       _id: 0,
    //       count: 1,
    //     },
    //   },
    //   { $sort: { datetime: 1 } },
    //   {
    //     $set: {
    //       isToday: {
    //         $eq: [
    //           '$datetime',
    //           new Date(cureentDate).toJSON().split('T')[0].replace(/\b0/g, ''),
    //         ],
    //       },
    //     },
    //   },
    // ]);

    // result = await Game.populate(result, { path: 'data.team_one' });
    // result = await Game.populate(result, { path: 'data.team_two' });
    this.sendResponse(res, result);
  };
}

const gameController = new GameController();
module.exports = gameController;
