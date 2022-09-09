module.exports = {
  get: {
    tags: ['league'],
    description: 'get one leaug',
    parameters: [{ $ref: '#/components/parameters/path/id' }],
    responses: {
      200: {
        $ref: '#/components/responses/league',
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
