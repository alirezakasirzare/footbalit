module.exports = {
  put: {
    tags: ['leauge'],
    description: 'update todo',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'leauge id',
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/LeaugeInput',
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Leauge',
            },
          },
        },
      },
      404: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/notFound',
            },
          },
        },
      },
      400: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/LeaugeError',
            },
          },
        },
      },
    },
  },
};
