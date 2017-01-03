# async-sleep [![Build Status](https://travis-ci.org/dimapaloskin/async-sleep.svg?branch=master)](https://travis-ci.org/dimapaloskin/async-sleep)

Promise-based sleep that supports resolve and reject with defined results.

## Install

```
npm i --save async-sleep
```

## Usage:

Use sleep function directly:
  
```js
import sleep from 'async-sleep'; // var sleep = require('async-sleep') also works 

const mock = {
  message: 'Hello world'
};

sleep(2000, mock).then(console.log); // { message: 'Hello world' }
```

Use resolve method:
```js
import sleep from 'async-sleep';

const mock = {
  message: 'Hello world'
};

sleep.resolve(2000, mock).then(console.log); // { message: 'Hello world' }
```

Use reject method:
```js
import sleep from 'async-sleep';

const mock = {
  error: 'Something went wrong...'
};

sleep.reject(2000, mock)
  .then(() => console.log('this message will never be shown'))
  .catch(console.log); // { error: 'Something went wrong...' }
```

Use randomResolve method:
```js
import sleep from 'async-sleep';

const mock = {
  message: 'Hello world'
};

sleep.randomResolve(100, 1000, mock).then(console.log); // { message: 'Hello world' }
```

Use randomReject method:
```js
import sleep from 'async-sleep';

const mock = {
  error: 'Something went wrong...'
};

sleep.randomReject(100, 1000, mock)
  .then(() => console.log('this message will never be shown'))
  .catch(console.log); // { error: 'Something went wrong...' }
```

## API

#### sleep(ms, [result])
#### sleep.resolve(ms, [result]);
#### sleep.reject(ms, [error]);
#### sleep.randomResolve(minMs, maxMs, [result]);
#### sleep.randomReject(minMs, maxMs, [error]);

## Author

[Dmitry Pavlovsky](http://palosk.in)
