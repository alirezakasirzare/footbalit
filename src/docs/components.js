const successWrapper = (schema) => {
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

const errorWrapper = (schema) => {
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

const createLeaugeSchema = (example) => {
  return {
    type: 'object',
    properties: {
      persian_name: {
        type: 'string',
        description: "Leagues's persian name",
        example: example.persian_name,
      },
      english_name: {
        type: 'string',
        description: "Leagues's english name",
        example: example.english_name,
      },
      country: {
        type: 'string',
        description: "Leagues's has for this country",
        example: example.country,
      },
    },
  };
};
const objectId = {
  type: 'string',
  description: 'an mongoDb objet id',
  example: '63189d302946bab4a684f22e',
};

const dateHelper = {
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

const notFoundSchema = {
  type: 'object',
  properties: {
    _message: {
      type: 'string',
      description: 'یافت نشد',
      example: 'یافت نشد',
    },
  },
};

const LeaugeInputSchema = createLeaugeSchema({
  persian_name: 'لیگ برتر',
  english_name: 'best leauge',
  country: 'iran',
});

const LeaugeErrorSchema = createLeaugeSchema({
  persian_name: 'نام فارسی الرامی است',
  english_name: 'نام انگلیسی الرامی است',
  country: 'نام کشور الرامی است',
});

const LeaugeSchema = {
  type: 'object',
  properties: {
    ...LeaugeInputSchema.properties,
    ...dateHelper,
    _id: objectId,
  },
};

const LeaugesSchema = {
  type: 'array',
  items: {
    ...LeaugeSchema,
  },
};

module.exports = {
  components: {
    schemas: {
      Leauge: successWrapper(LeaugeSchema),
      Leauges: successWrapper(LeaugesSchema),
      id: objectId,
      notFound: errorWrapper(notFoundSchema),
      LeaugeInput: LeaugeInputSchema,
      LeaugeError: errorWrapper(LeaugeErrorSchema),
    },
  },
};
