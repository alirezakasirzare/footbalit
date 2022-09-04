const League = require('../../../models/league');
const {
  goodResponse,
  notFoundResponse,
} = require('../../../utilities/response');

class LeagueController {
  getAllLeagues = async (req, res) => {
    const leagues = await League.find();

    const data = { data: leagues, msg: 'readed successfully' };
    goodResponse(res, data);
  };

  getOneLeague = async (req, res) => {
    const id = req.params.id;
    const league = await League.findById(id);

    if (league) {
      const data = { data: league, msg: 'readed successfully' };
      goodResponse(res, data);
    } else {
      notFoundResponse(res, 'league');
    }
  };
}

module.exports = new LeagueController();
