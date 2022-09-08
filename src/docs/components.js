const { docErrorWrapper, docObjectIdSchema } = require('../utils/docs.helper');
const leaugeSchemas = require('./leauge/schema');

// not found error schema
const notFoundSchema = {
  type: 'object',
  properties: {
    _message: {
      type: 'string',
      description: 'اطلاعاتی درباره خطا',
      example: 'یافت نشد',
    },
  },
};

// server error schema
const serverErrorSchema = {
  type: 'object',
  properties: {
    _message: {
      type: 'string',
      description: 'اطلاعاتی درباره خطا',
      example: 'خطای سمت سرور',
    },
  },
};

module.exports = {
  components: {
    schemas: {
      id: docObjectIdSchema,
      notFound: docErrorWrapper(notFoundSchema),
      serverError: docErrorWrapper(serverErrorSchema),
      ...leaugeSchemas,
    },
  },
};
