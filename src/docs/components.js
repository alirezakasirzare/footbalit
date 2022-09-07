const { docErrorWrapper, docObjectIdSchema } = require('../utils/docs.helper');
const leaugeSchemas = require('./leauge/schema');

const notFoundSchema = {
  type: 'object',
  properties: {
    _message: {
      type: 'string',
      description: 'یافت نشد',
      example: 'یافت نشد',
    },
  },
};

module.exports = {
  components: {
    schemas: {
      id: docObjectIdSchema,
      notFound: docErrorWrapper(notFoundSchema),
      ...leaugeSchemas,
    },
  },
};
