const {
  docSuccessWrapper,
  docErrorWrapper,
  docDatePartSchema,
  docObjectIdSchema,
} = require('../../utils/docs.helper');

/**
 *
 * @param {Object} example - leauge parametters examples
 * @returns {Object} - swagger leauge schema
 */
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

// leauge input schema
const leaugeInputSchema = createLeaugeSchema({
  persian_name: 'لیگ برتر',
  english_name: 'best leauge',
  country: 'iran',
});

// leauge error schema
const leaugeErrorSchema = createLeaugeSchema({
  persian_name: 'نام فارسی الرامی است',
  english_name: 'نام انگلیسی الرامی است',
  country: 'نام کشور الرامی است',
});

// leauge schema
const leaugeSchema = {
  type: 'object',
  properties: {
    ...leaugeInputSchema.properties,
    ...docDatePartSchema,
    _id: docObjectIdSchema,
  },
};

// all leauges schema
const leaugesSchema = {
  type: 'array',
  items: {
    ...leaugeSchema,
  },
};

module.exports = {
  Leauge: docSuccessWrapper(leaugeSchema),
  Leauges: docSuccessWrapper(leaugesSchema),
  LeaugeInput: leaugeInputSchema,
  LeaugeError: docErrorWrapper(leaugeErrorSchema),
};
