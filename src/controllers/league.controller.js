const League = require('../models/league.model');
const BaseController = require('./_base.controller');
const upload = require('../services/fileUpload.service');

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
   * can show curent course with set query get_course=true
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getOne = async (req, res) => {
    const id = req.params.id;
    const getCourse = req.query.get_course;

    let query = League.findById(id);

    // handle get_course query
    if (getCourse == 'true') {
      query = query.populate('course');
    }

    // execute query
    const result = await query;
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
   * get Count of leagues
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getCount = async (req, res) => {
    const count = await League.find().count();
    this.sendResponse(res, {
      count,
    });
  };

  /**
   * Create one league
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    await upload(req, 'image');
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
    await upload(req, 'image');
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
