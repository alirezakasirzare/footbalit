const { docErrorWrapper, docObjectIdSchema } = require('../utils/docs.helper');
const leaugeComponent = require('./leauge/component');

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
    // schemas
    schemas: {
      id: docObjectIdSchema,
      notFound: docErrorWrapper(notFoundSchema),
      serverError: docErrorWrapper(serverErrorSchema),
      ...leaugeComponent.schemas,
    },

    // parameters
    parameters: {
      path: {
        id: {
          name: 'id',
          in: 'path',
          schema: {
            $ref: '#/components/schemas/id',
          },
          required: true,
          description: 'leauge id',
        },
      },
    },

    // responses
    responses: {
      serverError: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/serverError',
            },
          },
        },
      },

      notFoundError: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/notFound',
            },
          },
        },
      },

      ...leaugeComponent.responses,
    },

    // body
    requestBodies: {
      ...leaugeComponent.bodies,
    },
  },
};
