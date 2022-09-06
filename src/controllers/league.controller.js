const League = require('../models/league.model');
const BaseController = require('./_base.controller');

class LeagueController extends BaseController {
  getAll = async (req, res) => {
    const leauges = await League.find();
    res.json(leauges);
  };

  get = async (req, res) => {
    const id = req.params.id;

    const league = await League.findById(id);
    res.json(league);
  };

  delete = async (req, res) => {
    const id = req.params.id;

    const league = await League.findByIdAndRemove(id);
    res.json(league);
  };

  create = async (req, res) => {
    const body = req.body;
    const leauge = new League(body);
    const result = await leauge.save();
    res.json(result);
  };

  update = async (req, res) => {
    const id = req.params.id;

    const body = req.body;
    const league = await League.findByIdAndUpdate(
      id,
      {
        $set: body,
      },
      {
        new: true,
      }
    );
    res.json(league);
  };
}

const leagueController = new LeagueController();
module.exports = leagueController;
