---
id: string
title: String
sidebar_label: String API
---

String validation can be done with the following options

## Options

- `options.empty` (default `false`) will check if the string is allowed to be
  empty `''` or not.

## Example

```js
const result = makeValidation((types) => {
  return {
    payload: {
      firstName: 'Adeel', // valid
      lastName: 'Imran', // valid
      email: '', // invalid
      sex: '', // valid
    },
    checks: {
      firstName: { type: types.string },
      lastName: { type: types.string },
      email: { type: types.string, options: { empty: false } },
      sex: { type: types.string, options: { empty: true } },
    },
  };
});
```
