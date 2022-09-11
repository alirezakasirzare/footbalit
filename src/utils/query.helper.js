/**
 * Create success response object
 *
 * @param {string} localField - field of local model
 * @param {string} foreignField - field of other model
 * @param {string} asName - name of the data key
 * @returns {Array} - a part of aggregate method
 */
const createPartLookupId = (localField, foreignField, asName) => {
  return [
    {
      $addFields: {
        teamId: {
          $toObjectId: '$_id',
        },
      },
    },
    {
      $lookup: {
        from: 'players',
        localField,
        foreignField,
        as: asName,
      },
    },
    {
      $unset: 'teamId',
    },
  ];
};

module.exports = {
  createPartLookupId,
};
