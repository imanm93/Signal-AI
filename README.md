# Signal-AI Code Challenge

[![Build Status](https://travis-ci.org/imanm93/Signal-AI.svg?branch=master)](https://travis-ci.org/imanm93/Signal-AI)

Convert an integer from 1 to 1000, inclusive, to it's grammatically correct English phrase.

## Install

```
npm install --save signal-ai-code-challenge
```

## Usage

```js
const numberToWords = require('signal-ai-code-challenge');

console.log(numberToWords(1));
// result "One"

console.log(numberToWords(151));
// result "One Hundred and Fifty-One"

```

## Development

To start development, first install npm dependencies

```
npm install
```

To run tests

```
npm run test
```
