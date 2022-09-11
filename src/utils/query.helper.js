/**
 * Create arguments for aggregate method
 *
 * @param {ObjectId} id - id for match
 * @param {string} localField - field of local model
 * @param {string} foreignField - field of other model
 * @param {string} asName - name of the data key
 * @param {string} getOtherData - comes from query params if true should get other data from another models
 *
 * @returns {Array} - a part of aggregate method
 */
const createLookupMatchId = (
  id,
  localField,
  foreignField,
  asName,
  getOtherData
) => {
  let queryPart = [
    {
      $match: {
        _id: id,
      },
    },
  ];

  // get matching with other data model
  if (getOtherData == 'true') {
    queryPart = queryPart.concat([
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
    ]);
  }

  return queryPart;
};

/**
 * Return one item from given arrays
 *
 * @param {Array} items - array from result query items
 * @returns {Object} - one document from
 */
const getOneItem = (items) => {
  return items.length > 0 ? items[0] : null;
};

module.exports = {
  createLookupMatchId,
  getOneItem,
};
