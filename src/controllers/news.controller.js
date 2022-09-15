const News = require('../models/news.model');
const BaseController = require('./_base.controller');

class NewsController extends BaseController {
  /**
   * Create one news
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
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
}

const newsController = new NewsController();
module.exports = newsController;
