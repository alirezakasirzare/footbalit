const League = require('../../../models/league');
const { pick } = require('lodash');
const {
  goodResponse,
  notFoundResponse,
} = require('../../../utilities/response');

class LeagueController {
  createLeague = async (req, res) => {
    const data = pick(req.body, ['persian_name', 'english_name', 'country']);
    const leauge = new League(data);
    const result = await leauge.save();
    const responseData = { data: result, msg: 'created successfully' };
    goodResponse(res, responseData);
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

    if (league) {
      const responseData = { data: league, msg: 'updated successfully' };
      goodResponse(res, responseData);
    } else {
      notFoundResponse(res, 'league');
    }
  };

  deleteLeague = async (req, res) => {
    const id = req.params.id;
    const league = await League.findByIdAndRemove(id);

    if (league) {
      const responseData = { data: league, msg: 'deleted successfully' };
      goodResponse(res, responseData);
    } else {
      notFoundResponse(res, 'league');
    }
  };
}

module.exports = new LeagueController();
