const League = require('../models/league.model');
const BaseController = require('./_base.controller');

class LeagueController extends BaseController {
  getAll = async (req, res) => {
    const leauges = await League.find();
    res.json(leauges);
  };

  get = async (req, res) => {
    const id = req.params.id;
    const isValidId = this.checkMongoId(id);
    if (!isValidId) return res.send('not valid');

    const league = await League.findById(id);
    if (league) {
      res.json(league);
    } else {
      res.send('not found');
    }
  };

  delete = async (req, res) => {
    const id = req.params.id;
    const isValidId = this.checkMongoId(id);
    if (!isValidId) return res.send('not valid');

    const league = await League.findByIdAndRemove(id);
    if (league) {
      res.json(league);
    } else {
      res.send('not found');
    }
  };
}

const leagueController = new LeagueController();
module.exports = leagueController;
