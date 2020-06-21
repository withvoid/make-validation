---
id: install
title: Installation
sidebar_label: Installation
---

## Install

```
npm i @withvoid/make-validation --save
```

## Usage

```js
const makeValidation = require('@withvoid/make-validation');

const result = makeValidation((types) => {
  return {
    payload: {}, // usually `req.body`
    checks: {}, // list of checks against `req.body`
  };
});

console.log('result', result.success, result.message, result.errors);
```
