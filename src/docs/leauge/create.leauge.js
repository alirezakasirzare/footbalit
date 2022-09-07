module.exports = {
  post: {
    tags: ['leauge'],
    description: 'Create todo',
    operationId: 'createTodo',
    parameters: [],
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
      201: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Leauge',
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
