const { pageRecords } = require('../config/general.config');
const News = require('../models/news.model');
const Team = require('../models/team.model');
const League = require('../models/league.model');
const BaseController = require('./_base.controller');

class SearchController extends BaseController {
  /**
   * Search from team and news and league
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  search = async (req, res) => {
    const text = req.params.text;
    const limitCount = 7;

    // execute query
    const news = await News.find({
      tags: { $regex: text, $options: 'i' },
    })
      .select('title')
      .limit(limitCount);

    const teams = await Team.find({
      persian_name: { $regex: text, $options: 'i' },
    })
      .select('persian_name')
      .limit(limitCount);

    const leagues = await League.find({
      persian_name: { $regex: text, $options: 'i' },
    })
      .select('persian_name')
      .limit(limitCount);

    // send result
    const data = {
      news,
      team: teams,
      league: leagues,
    };
    const result = this.sendResponse(res, data);
    this.sendResponse(res, result);
  };
}

const searchController = new SearchController();
module.exports = searchController;
