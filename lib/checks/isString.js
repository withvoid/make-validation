const setCheckResponse = require('./helper/setCheckResponse');

const defaultOptions = {
  empty: false,
};

const isString = ({ value, options = defaultOptions }) => {
  if (typeof value !== 'string') {
    return setCheckResponse(false, 'please provide a string');
  }
  if (!options.empty && value.trim().length === 0) {
    return setCheckResponse(false, 'string cannot be empty');
  }
  return setCheckResponse(true);
};

module.exports = isString;
