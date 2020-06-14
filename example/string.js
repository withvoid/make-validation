const makeValidation = require('../lib');

const result = makeValidation((types) => {
  return {
    payload: {
      firstName: 'Adeel',
      lastName: 'Imran',
      email: '',
      sex: '',
    },
    checks: {
      firstName: { type: types.string }, // be default empty: true
      lastName: { type: types.string }, // be default empty: true
      email: { type: types.string, options: { empty: false } },
      sex: { type: types.string, options: { empty: true } },
    },
  };
});

console.log('success', result.success);
console.log('message', result.message);
console.log('errors', result.errors);
