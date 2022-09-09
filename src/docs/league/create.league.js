module.exports = {
  post: {
    tags: ['league'],
    description: 'Create todo',
    operationId: 'createTodo',
    parameters: [],
    requestBody: {
      $ref: '#/components/requestBodies/league',
    },
    responses: {
      201: {
        $ref: '#/components/responses/league',
      },
      400: {
        $ref: '#/components/responses/leagueError',
      },
      500: {
        $ref: '#/components/responses/serverError',
      },
    },
  },
};
