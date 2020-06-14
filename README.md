# make-validation

## Install

```
npm i @withvoid/make-validation --save
```

## Usage

const makeValidation = require('@withvoid/make-validation')

const result = makeValidation((types) => {
  return {
    payload: {},
    checks: {},
  };
});

console.log('result', result.success, result.message, result.errors);

## Examples

- [validate a string](example/string.js)
- [validate an enum type](example/enum.js)
- [validate an array](example/array.js)

This library was intended to validate user req.body in your node/express
projects for example.

```js
import express from 'express';
const router = express.Router();

router.post('/get-users', async (req, res) => {
  try {
    const validation = makeValidation(types => ({
      payload: req.body,
      checks: {
        firstName: { type: types.string },
        lastName: { type: types.string },
        type: { type: types.enum, options: { enum: { 0: 'admin', 1: 'user' } } },
      }
    }));
    if (!validation.success) return res.status(400).json({ ...validation });

    // code below this won't be executed untill the user sends in the right
    // payload.
    const { firstName, lastName, type } = req.body;
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
});

export default router;
```

## Api

#### callback

```js
const validation = makeValidation(types => {});
```

makeValidation method returns a callback, the callback has all the valid
types of validations available.

![callback example](public/callback.png?raw=true "callback example")

