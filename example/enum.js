const makeValidation = require('../lib');

const result = makeValidation((types) => {
  return {
    payload: {
      type1: 'eagle',
      type2: 'admin',
      type3: 'elephant',
      type4: 'user',
    },
    checks: {
      type1: { type: types.enum, options: { enum: 'admin user' } },
      type2: { type: types.enum, options: { enum: 'admin user' } },
      type3: {
        type: types.enum,
        options: {
          enum: { 0: 'admin', 1: 'user' },
        },
      },
      type4: {
        type: types.enum,
        options: {
          enum: { 0: 'admin', 1: 'user' },
        },
      },
    },
  };
});

console.log('success', result.success);
console.log('message', result.message);
console.log('errors', result.errors);
