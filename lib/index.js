const getError = require('./getError');
const validationTypes = require('./validationTypes');
const validate = require('./validate');

/**
 * Validation method to check the request body you get from user & compares it 
 * with your own list of checks & returns an error if error(s) is/are found.
 * 
 * @param {function(validationTypes)} cb - callback function that 
 *    gives `validationTypes` in return i.e, makeValidation(types => {})
 * @returns {{success: boolean, errorMessage: string, errors: object}} 
 *    response - returns of method
 * @example
 *  
    const validation = makeValidation(types => ({
      payload: req.body,
      checks: {
        firstName: { type: types.string },
        lastName: { type: types.string },
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
function makeValidation(cb = () => {}) {
  const result = cb(validationTypes);
  if (!result)
    getError({
      errorMessage: 'Missing payload & checks',
    });
  const { payload, checks } = result;
  return validate({ payload, checks });
}

module.exports = makeValidation;
