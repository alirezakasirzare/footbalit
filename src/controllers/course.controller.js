const Course = require('../models/course.model');
const BaseController = require('./_base.controller');

class CourseController extends BaseController {
  /**
   * Create one course
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  create = async (req, res) => {
    const body = req.body;
    const cup = new Course(body);
    const result = await cup.save();

    this.sendResponse(res, result, 201);
  };

  /**
   * Get all courses
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  getAll = async (req, res) => {
    const result = await Course.find();
    this.sendResponse(res, result);
  };

  /**
   * Update one course
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const result = await Course.findByIdAndUpdate(
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
   * Delete one course
   *
   * @param {Object} req - express request
   * @param {Object} res - express response
   */
  delete = async (req, res) => {
    const id = req.params.id;
    const result = await Course.findByIdAndRemove(id);
    this.sendResponse(res, result);
  };
}

const courseController = new CourseController();
module.exports = courseController;
