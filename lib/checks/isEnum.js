const setCheckResponse = require('./helper/setCheckResponse');

const isEnum = ({ value, enumObj = {} } = {}) => {
  const enumValues = Object.values(enumObj);
  const found = enumValues.some((enumItem) => enumItem === value);
  if (!found) {
    return setCheckResponse(false, `Possible value are ${enumValues}`);
  }
  return setCheckResponse(true);
};

module.exports = isEnum;
