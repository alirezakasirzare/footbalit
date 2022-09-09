const {
  docSuccessWrapper,
  docErrorWrapper,
  docDatePartSchema,
  docObjectIdSchema,
} = require('../../utils/docs.helper');

/**
 *
 * @param {Object} example - league parametters examples
 * @returns {Object} - swagger league schema
 */
const createleagueSchema = (example) => {
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

// league input schema
const leagueInputSchema = createleagueSchema({
  persian_name: 'لیگ برتر',
  english_name: 'best league',
  country: 'iran',
});

// league error schema
const leagueErrorSchema = createleagueSchema({
  persian_name: 'نام فارسی الرامی است',
  english_name: 'نام انگلیسی الرامی است',
  country: 'نام کشور الرامی است',
});

// league schema
const leagueSchema = {
  type: 'object',
  properties: {
    ...leagueInputSchema.properties,
    ...docDatePartSchema,
    _id: docObjectIdSchema,
  },
};

// all leagues schema
const leaguesSchema = {
  type: 'array',
  items: {
    ...leagueSchema,
  },
};

const leagueRes = {
  league: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/league',
        },
      },
    },
  },
};

const leaguesRes = {
  leagues: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/leagues',
        },
      },
    },
  },
};

const leagueBody = {
  league: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/leagueInput',
        },
      },
    },
  },
};

const leagueErrorRes = {
  leagueError: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/leagueError',
        },
      },
    },
  },
};

module.exports = {
  schemas: {
    league: docSuccessWrapper(leagueSchema),
    leagues: docSuccessWrapper(leaguesSchema),
    leagueInput: leagueInputSchema,
    leagueError: docErrorWrapper(leagueErrorSchema),
  },
  responses: {
    ...leagueRes,
    ...leaguesRes,
    ...leagueErrorRes,
  },
  bodies: {
    ...leagueBody,
  },
};
