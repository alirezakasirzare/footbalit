module.exports = {
  put: {
    tags: ['leauge'],
    description: 'update todo',
    parameters: [{ $ref: '#/components/parameters/path/id' }],
    requestBody: {
      $ref: '#/components/requestBodies/Leauge',
    },
    responses: {
      200: {
        $ref: '#/components/responses/Leauge',
      },
      400: {
        $ref: '#/components/responses/LeaugeError',
      },
      404: {
        $ref: '#/components/responses/notFoundError',
      },
      500: {
        $ref: '#/components/responses/serverError',
      },
    },
  },
};
