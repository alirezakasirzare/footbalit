module.exports = {
  get: {
    tags: ['leauge'],
    description: 'get all leaugs',
    parameters: [],
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'oject',
              $ref: '#/components/schemas/Leauges',
            },
          },
        },
      },
    },
  },
};
