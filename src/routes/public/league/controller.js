const League = require('../../../models/league');

class LeagueController {
  getAllLeagues = async (req, res) => {
    const leagues = await League.find();
    res.json(leagues);
  };

  getOneLeague = async (req, res) => {
    const id = req.params.id;
    const league = await League.findById(id);
    res.json(league);
  };
}

module.exports = new LeagueController();
