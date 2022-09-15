const Comment = require('../models/comment.model');
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
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const newsId = req.query.news;

    // handle news query
    let queryFilter = {};
    if (newsId) {
      queryFilter.news = newsId;
    }

    // execute query
    const result = await Comment.find(queryFilter).populate('user');
    this.sendResponse(res, result);
  };
}

const commentController = new CommentController();
module.exports = commentController;
