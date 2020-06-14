# make-validation

### install

```
npm i @withvoid/make-validation --save
```

### usage

const makeValidation = require('@withvoid/make-validation')

const result = makeValidation((types) => {
  return {
    payload: {},
    checks: {},
  };
});

console.log('result', result.success, result.message, result.errors);

#### example

- [validate a string](example/string.js)
- [validate an enum type](example/enum.js)
- [validate an array](example/array.js)

