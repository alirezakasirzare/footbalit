const League = require('../../../models/league');
const { pick } = require('lodash');

class LeagueController {
  createLeague = async (req, res) => {
    const data = pick(req.body, ['persian_name', 'english_name', 'country']);
    const leauge = new League(data);
    const result = await leauge.save();
    res.json(result);
  };

  updateLeague = async (req, res) => {
    const id = req.params.id;
    const data = pick(req.body, ['persian_name', 'english_name', 'country']);

    const league = await League.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      {
        new: true,
      }
    );

    res.json(league);
  };

  deleteLeague = async (req, res) => {
    const id = req.params.id;
    const league = await League.findByIdAndRemove(id);
    res.json(league);
  };
}

module.exports = new LeagueController();
