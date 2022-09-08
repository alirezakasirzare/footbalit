module.exports = {
  get: {
    tags: ['leauge'],
    description: 'get all leaugs',
    parameters: [],
    responses: {
      200: {
        $ref: '#/components/responses/Leauges',
      },
      500: {
        $ref: '#/components/responses/serverError',
      },
    },
  },
};
