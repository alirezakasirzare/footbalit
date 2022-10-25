const Event = require('../models/event.model');
const { checkObjectId } = require('../utils/validate.helper');
const BaseController = require('./_base.controller');

class EventController extends BaseController {
  /**
   * Create one event
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    const body = req.body;
    const query = new Event(body);
    const result = await query.save();

    this.sendResponse(res, result, 201);
  };

  /**
   * Get all events
   *
   * can filter by game with set query game
   * can get team with set get_tram query
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const { game: gameId, get_team: getTeam } = req.query;

    let queryFilter = {};

    // handle game query
    if (checkObjectId(gameId)) {
      queryFilter.game = gameId;
    }

    let query = Event.find(queryFilter);

    // handle get_team query
    if (getTeam == 'true') {
      query = query.populate('team');
    }

    // execute query
    const result = await query;
    this.sendResponse(res, result);
  };

  /**
   * Delete one event
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  delete = async (req, res) => {
    const id = req.params.id;
    const result = await Event.findByIdAndRemove(id);
    this.sendResponse(res, result);
  };

  /**
   * Update one event
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const result = await Event.findByIdAndUpdate(
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

const eventController = new EventController();
module.exports = eventController;
