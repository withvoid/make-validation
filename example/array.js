const makeValidation = require('../lib');

const result = makeValidation((types) => {
  return {
    payload: {
      key1: [], // invalid
      key2: [], // valid
      key3: ['john', 'doe'], // valid
      key4: ['john', 'doe', 'john'], // invalid
      key5: ['john', 'doe', 'john'], // valid
      key6: 'invalid type', // invalid
      key7: ['array', 'of', 'strings', 'only'], // valid
      key8: ['array', 'of', 'strings', 'only', 77777, 'invalid'], // invalid
      key9: ['array', 'of', 'strings', 'only', 77777, 'invalid'], // valid
    },
    checks: {
      key1: { type: types.array },
      key2: { type: types.array, options: { empty: true } },
      key3: { type: types.array },
      key4: { type: types.array, options: { unique: true } },
      key5: { type: types.array, options: { unique: false } },
      key6: { type: types.array },
      key7: { type: types.array, options: { stringOnly: false } },
      key8: { type: types.array, options: { stringOnly: true } },
      key9: { type: types.array, options: { stringOnly: false } },
    },
  };
});

console.log('success', result.success);
console.log('message', result.message);
console.log('errors', result.errors);
