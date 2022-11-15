const { pageRecords } = require('../config/general.config');
const News = require('../models/news.model');
const { skipCount } = require('../utils/pagination.helper');
const BaseController = require('./_base.controller');

class NewsController extends BaseController {
  /**
   * Create one news
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    await upload(req, 'image');

    const body = req.body;
    const news = new News(body);
    const result = await news.save();

    this.sendResponse(res, result, 201);
  };

  /**
   * Update one news
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  update = async (req, res) => {
    await upload(req, 'image');

    const id = req.params.id;
    const body = req.body;
    const result = await News.findByIdAndUpdate(
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

  /**
   * Delete one news
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  delete = async (req, res) => {
    const id = req.params.id;
    const result = await News.findByIdAndRemove(id);
    this.sendResponse(res, result);
  };

  /**
   * Get one news
   *
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getOne = async (req, res) => {
    const id = req.params.id;
    let result = await News.findById(id);
    this.sendResponse(res, result);
  };

  /**
   * Get all news
   *
   * can filter by tag with set q query
   * can set page query for get page we want
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const { q, page = 1 } = req.query;

    // handle q query
    let queryFilter = {};
    if (q) {
      queryFilter.tags = { $regex: q, $options: 'i' };
    }

    // count
    const count = await News.find(queryFilter).count();

    // execute query
    const data = await News.find(queryFilter)
      .sort({ createdAt: -1 })
      .limit(pageRecords)
      .skip(skipCount(page));

    // send result
    this.sendResponsePagination(res, data, page, count);
  };

  /**
   * get Count of news
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getCount = async (req, res) => {
    const count = await News.find().count();
    this.sendResponse(res, {
      count,
    });
  };

  /**
   * Get all news
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAllStatic = async (req, res) => {
    const result = await News.find().sort({ createdAt: -1 });

    // send result
    this.sendResponse(res, result);
  };
}

const newsController = new NewsController();
module.exports = newsController;
