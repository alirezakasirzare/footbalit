module.exports = {
  put: {
    tags: ['league'],
    description: 'update todo',
    parameters: [{ $ref: '#/components/parameters/path/id' }],
    requestBody: {
      $ref: '#/components/requestBodies/league',
    },
    responses: {
      200: {
        $ref: '#/components/responses/league',
      },
      400: {
        $ref: '#/components/responses/leagueError',
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
