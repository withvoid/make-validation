/**
 * Standard error method
 *
 * @returns {{ success: boolean, message: string, errors: object }}
 */
const getError = ({
  success = false,
  message = success ? '' : 'Kindly fix the error(s)',
  errors = {},
}) => {
  return {
    success,
    message,
    errors,
  };
};

module.exports = getError;
