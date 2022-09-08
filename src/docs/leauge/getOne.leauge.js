module.exports = {
  get: {
    tags: ['leauge'],
    description: 'get one leaug',
    parameters: [{ $ref: '#/components/parameters/path/id' }],
    responses: {
      200: {
        $ref: '#/components/responses/Leauge',
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
