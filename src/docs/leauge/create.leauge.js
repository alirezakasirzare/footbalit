module.exports = {
  post: {
    tags: ['leauge'],
    description: 'Create todo',
    operationId: 'createTodo',
    parameters: [],
    requestBody: {
      $ref: '#/components/requestBodies/Leauge',
    },
    responses: {
      201: {
        $ref: '#/components/responses/Leauge',
      },
      400: {
        $ref: '#/components/responses/LeaugeError',
      },
      500: {
        $ref: '#/components/responses/serverError',
      },
    },
  },
};
