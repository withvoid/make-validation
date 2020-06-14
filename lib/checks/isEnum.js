const isString = require('./isString');
const setCheckResponse = require('./helper/setCheckResponse');

const defaultOptions = {
  enum: {},
};

const isEnum = ({ value, options = defaultOptions }) => {
  if (!options.enum) {
    const message = `options.enum required can be an object or string seperated by command`;
    return setCheckResponse(false, message);
  }

  const enumValues = isString({ value: options.enum }).confirm
    ? options.enum.split(' ')
    : Object.values(options.enum);

  const found = enumValues.some((enumItem) => enumItem === value);
  if (!found) {
    return setCheckResponse(false, `Possible value are ${enumValues}`);
  }
  return setCheckResponse(true);
};

module.exports = isEnum;
