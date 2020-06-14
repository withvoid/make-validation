const validationTypes = require('./validationTypes');
const isString = require('./checks/isString');
const isArray = require('./checks/isArray');
const isEnum = require('./checks/isEnum');
const getError = require('./getError');

/**
 * Method to validate req.body with checks provided
 *
 * @todo generic method to check if key is available or not.
 * @todo types.array, { options => minLength }
 * @todo types.string { options => except }
 *
 * @param {Object} response - the args passed to the method
 * @param {Object} response.payload - Expects the `req.body` or any object you
 *    want to validation
 * @param {Object} response.checks - The check object, checks types from the
 *    responsepayload arg to see if it is valid or not
 */
const validate = ({ payload, checks }) => {
  const errors = {};

  if (!payload) {
    return getError({ message: 'payload is required in makeValidation()' });
  }
  if (!checks) {
    return getError({ message: 'checks is required in makeValidation()' });
  }

  Object.keys(checks).forEach((checkKey) => {
    const { type, options = {} } = checks[checkKey];
    const value = payload[checkKey];

    switch (type) {
      case validationTypes.string: {
        const { confirm, message } = isString({ value, options });
        if (!confirm) {
          errors[checkKey] = message;
        }
        break;
      }
      case validationTypes.enum: {
        const { confirm, message } = isEnum({ value, options });
        if (!confirm) {
          errors[checkKey] = message;
        }
        break;
      }
      case validationTypes.array: {
        const { confirm, message } = isArray({ value, options });
        if (!confirm) {
          errors[checkKey] = message;
        }
        break;
      }
      default: {
        errors[checkKey] = `Unknown type passed ${type}`;
      }
    }
  });

  return getError({
    success: Object.values(errors).length === 0,
    errors,
  });
};

module.exports = validate;
