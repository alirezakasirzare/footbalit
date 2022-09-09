module.exports = {
  get: {
    tags: ['league'],
    description: 'get all leaugs',
    parameters: [],
    responses: {
      200: {
        $ref: '#/components/responses/leagues',
      },
      500: {
        $ref: '#/components/responses/serverError',
      },
    },
  },
};
