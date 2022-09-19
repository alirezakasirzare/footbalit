const { pageRecords } = require('../config/general.config');
const Comment = require('../models/comment.model');
const { skipCount } = require('../utils/pagination.helper');
const BaseController = require('./_base.controller');

class CommentController extends BaseController {
  /**
   * Create one news
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    const body = req.body;
    const userId = req.user.id;

    const comment = new Comment(body);
    comment.user = userId;

    const result = await comment.save();
    this.sendResponse(res, result, 201);
  };

  /**
   * Update one comment
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const result = await comment.findByIdAndUpdate(
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
   * Get all comment
   *
   * can filter by news with set news query
   * can get a soecial page with set page query
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const { news: newsId, page = 1 } = req.query;

    // handle news query
    let queryFilter = {};
    if (newsId) {
      queryFilter.news = newsId;
    }

    // count
    const count = await Comment.find(queryFilter).count();

    // execute query
    const data = await Comment.find(queryFilter)
      .limit(pageRecords)
      .skip(skipCount(page))
      .sort({ createdAt: -1 })
      .populate('user', 'image first_name');

    // send result
    this.sendResponsePagination(res, data, page, count);
  };
}

const commentController = new CommentController();
module.exports = commentController;
