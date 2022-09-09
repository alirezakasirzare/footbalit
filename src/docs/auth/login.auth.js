module.exports = {
  post: {
    tags: ['auth'],
    description: 'login to account',
    parameters: [],
    requestBody: {
      $ref: '#/components/requestBodies/login',
    },
    responses: {
      200: {
        $ref: '#/components/responses/token',
      },
      400: {
        content: {
          'application/json': {
            schema: {
              oneOf: [
                { $ref: '#/components/schemas/loginError' },
                { $ref: '#/components/schemas/noEmailPass' },
              ],
            },
          },
        },
      },
      500: {
        $ref: '#/components/responses/serverError',
      },
    },
  },
};
