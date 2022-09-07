const docSuccessWrapper = (schema) => {
  return {
    type: 'object',
    properties: {
      data: schema,
      error: {
        type: 'object',
        nullable: true,
        example: null,
      },
      success: {
        type: 'boolean',
        example: 'true',
      },
      message: {
        type: 'string',
        example: 'The process is successfully completed',
      },
    },
  };
};

const docErrorWrapper = (schema) => {
  return {
    type: 'object',
    properties: {
      error: schema,
      data: {
        type: 'object',
        nullable: true,
        example: null,
      },
      success: {
        type: 'boolean',
        example: 'false',
      },
      message: {
        type: 'string',
        example: 'The process encountered an error',
      },
    },
  };
};

const docDatePartSchema = {
  createdAt: {
    type: 'string',
    description: 'The league created in this time by user',
    example: '2022-09-07T13:31:28.952Z',
  },
  updatedAt: {
    type: 'string',
    description: 'The league updated in this time by user',
    example: '2022-09-07T13:31:28.952Z',
  },
};

const docObjectIdSchema = {
  type: 'string',
  description: 'an mongoDb objet id',
  example: '63189d302946bab4a684f22e',
};

module.exports = {
  docDatePartSchema,
  docErrorWrapper,
  docObjectIdSchema,
  docSuccessWrapper,
};
