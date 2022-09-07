module.exports = {
  delete: {
    tags: ['leauge'],
    description: 'Deleting a Leauge',
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
    },
  },
};
