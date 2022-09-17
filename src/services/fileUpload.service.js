const path = require('path');
const { v4: uuid } = require('uuid');
const { mediaPath } = require('../config/global.config');

/**
 * upload static files (for now just image)
 *
 * @param {Object} req - express request
 * @param {Object} property - file property name
 */
upload = async (req, property) => {
  let imageName = null;
  if (req.files && Object.keys(req.files).length !== 0) {
    const image = req.files[property];
    if (image) {
      const extension = path.extname(image.name);
      imageName = uuid() + extension;

      if (!extension.match(/\.(jpg|jpeg|png)$/i)) return;

      const imagePath = path.format({
        dir: mediaPath,
        base: imageName,
      });
      await image.mv(imagePath);
    }
  }

  if (property && imageName) {
    req.body[property] = imageName;
  }
};

module.exports = upload;
