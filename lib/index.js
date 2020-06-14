const validationTypes = require('./validationTypes');
const validate = require('./validate');

/**
 * used for intellisense in callback function
 *
 * @callback validationTypes
 */
const callbackTypes = validationTypes; // eslint-disable-line no-unused-vars

/**
 * Validation method to check the request body you get from user & compares it 
 * with your own list of checks & returns an error if error(s) is/are found.
 * 
 * @param {function(callbackTypes)} cb - callback function
 * @returns {{success: boolean, message: string, errors: object}} 
 * 
 * @example
 *  
    const validation = makeValidation(types => ({
      payload: req.body,
      checks: {
        userType: { type: types.enum, enums: { 0: 'admin', 1: 'consumer' } },
        userIds: { type: types.arrayOfStrings },
        users: { 
          type: types.arrayOfObject, 
          options: {
            id: { type: types.string },
            name: { type: types.string },
          } 
        },
      }
    }));
    // const { success, errors, errorMessage } = validation;
    if (!validation.success) return res.status(400).json({ ...validation });
 */
function makeValidation(cb) {
  const result = cb(validationTypes);
  const { payload, checks } = result || {};
  return validate({ payload, checks });
}

module.exports = makeValidation;
