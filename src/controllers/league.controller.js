const League = require('../models/league.model');
const BaseController = require('./_base.controller');

class LeagueController extends BaseController {
  complete = (res, result) => {
    this.sendResponse(res, { data: result, expect: 'لیگ' });
  };

  getAll = async (req, res) => {
    const result = await League.find();
    this.complete(res, result);
  };

  get = async (req, res) => {
    const id = req.params.id;

    const result = await League.findById(id);
    this.complete(res, result);
  };

  delete = async (req, res) => {
    const id = req.params.id;

    const result = await League.findByIdAndRemove(id);
    this.complete(res, result);
  };

  create = async (req, res) => {
    const body = req.body;
    const leauge = new League(body);
    const result = await leauge.save();
    this.complete(res, result);
  };

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
    this.complete(res, result);
  };
}

const leagueController = new LeagueController();
module.exports = leagueController;
