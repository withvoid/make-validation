# make-validation

## Install

```
npm i @withvoid/make-validation --save
```

## Usage

```js
const makeValidation = require('@withvoid/make-validation')

const result = makeValidation((types) => {
  return {
    payload: {},
    checks: {},
  };
});

console.log('result', result.success, result.message, result.errors);
```

## Examples

- [validate a string](example/string.js)
- [validate an enum type](example/enum.js)
- [validate an array](example/array.js)
- [ExpressJS example](example/express-example.js)

This library was intended to validate user req.body in your node/express
projects for example.

See the code version example [here](example/express-example.js)

![express-example example](public/express-example.png?raw=true "express-example example")

## Api

### callback

```js
const validation = makeValidation(types => {});
```

makeValidation method returns a callback, the callback has all the valid
types of validations available.

![callback example](public/callback.png?raw=true "callback example")

### payload

```js
const validation = makeValidation(types => {
  return {
    payload: {
      firstName: 'john',
      lastname: 'doe'
    }
  }
});
```

`payload` is the actual data you want to verify

### checks

```js
const validation = makeValidation(types => {
  return {
    payload: {
      firstName: 'john',
      lastname: 'doe'
    }
    checks: {
      firstName: { type: types.string },
      lastname: { type: types.string },
    }
  }
});
```

`checks` will check the data in the payload if they are of the right type.

For every check type there are some options available.

#### types.string

- `options.empty` (default `false`) will check if the string is allowed to be
    empty `''` or not.

#### types.array

- `options.unique` (default `false`) will check if the array is unique or not
- `options.stringOnly` (default `false`) will check if the all the values in
    array are strings or not
- `options.empty` (default `true`) will check if the array is empty allowed or
    not

#### types.enum

- `options.enum` (default `{}`, required: yes) It can be of 2 types string and
    object.

```js
checks: {
  userType1: { type: types.enum, options: { enum: 'admin user' } },
  userType2: {
    type: types.enum,
    options: {
      enum: { 0: 'admin', 1: 'user' },
    },
  },
},
```

- If `options.enum` a `string` the enum is seperated by space.
- If `options.enum` an `object` the enum are the values in the objects.

