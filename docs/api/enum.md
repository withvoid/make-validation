---
id: enum
title: Enum
sidebar_label: Enum API
---

Enum validation can be done with the following options

## Options

- `options.enum` (default `{}`, required: `yes`) It can be of 2 types string and
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
}
```

- If `options.enum` a `string` the enum is seperated by space.
- If `options.enum` an `object` the enum are the values in the objects.

## Example

```js
const result = makeValidation((types) => {
  return {
    payload: {
      type1: 'eagle', // invalid
      type2: 'admin', // valid
      type3: 'elephant', // invalid
      type4: 'user', // valid
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
```
