const isString = require('./isString');
const setCheckResponse = require('./helper/setCheckResponse');

const defaultOptions = {
  unique: false,
  stringOnly: false,
  empty: true,
};

const isArray = ({ array, options = defaultOptions }) => {
  if (!Array.isArray(array)) {
    return setCheckResponse(false, 'Please provide as array');
  }
  if (options.unique) {
    const isUnique = new Set(array).size === array.length;
    if (!isUnique) {
      return setCheckResponse(false, 'Values of array should be unique');
    }
  }
  if (options.stringOnly) {
    const areString = array.every((item) => isString({ value: item }));
    if (!areString) {
      return setCheckResponse(false, 'Values of array should be string only');
    }
  }
  if (options.empty && array.length === 0) {
    return setCheckResponse(false, 'Array cannot be empty');
  }
  return true;
};

module.exports = isArray;
