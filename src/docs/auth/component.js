const {
  docSuccessWrapper,
  docErrorWrapper,
} = require('../../utils/docs.helper');

/**
 *
 * @param {Object} example - league parametters examples
 * @returns {Object} - swagger league schema
 */
const createLoginSchema = (example) => {
  return {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: "login's email",
        example: example.email,
      },
      password: {
        type: 'string',
        description: "login's password",
        example: example.password,
      },
    },
  };
};

// token schema
const tokenSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
      description: 'token',
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWI4NDJkNTI2Y2Y4MTIyZWZlODczNiIsImlhdCI6MTY2Mjc0OTA3NX0.fDCp2Z0O1A-8YsN2pClmPF-Eac_Uc1oawbpMFNiRLSE',
    },
  },
};

// token response
const tokenRes = {
  token: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/token',
        },
      },
    },
  },
};

// token schema
const notFoundEmailOrReqponseSchema = {
  type: 'object',
  properties: {
    _message: {
      type: 'string',
      description: 'not found email or password',
      example: 'ایمیل یا رمز اشتباه است',
    },
  },
};

// token response
const notFoundEmailOrReqponseSchemaRes = {
  noEmailPassRes: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/noEmailPass',
        },
      },
    },
  },
};

// login error schema
const loginError = createLoginSchema({
  email: 'ایمیل الرامی است',
  password: 'رمز الرامی است',
});

// login input
const loginInput = createLoginSchema({
  email: 'alirezakasir@yahoo.com',
  password: '1234',
});

// login body
const loginBody = {
  login: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/loginInput',
        },
      },
    },
  },
};

module.exports = {
  schemas: {
    token: docSuccessWrapper(tokenSchema),
    noEmailPass: docErrorWrapper(notFoundEmailOrReqponseSchema),
    loginError: docErrorWrapper(loginError),
    loginInput,
  },
  responses: {
    ...tokenRes,
    ...notFoundEmailOrReqponseSchemaRes,
  },
  bodies: {
    ...loginBody,
  },
};
