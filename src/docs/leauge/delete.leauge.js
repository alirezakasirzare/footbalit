module.exports = {
  delete: {
    tags: ['leauge'],
    description: 'Deleting a Leauge',
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
