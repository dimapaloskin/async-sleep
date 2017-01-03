'use strict';

var Promise = require('any-promise');

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resolve(ms, response) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, response), ms);
  });
};

function reject(ms, response) {
  return new Promise(function(resolve, reject) {
    setTimeout(reject.bind(null, response), ms);
  });
};

function randomResolve(min, max, response) {
  var randomTimeout = rnd(min, max);
  return resolve(randomTimeout, response);
}

function randomReject(min, max, error) {
  var randomTimeout = rnd(min, max);
  return reject(randomTimeout, error);
}

var sleep = (function(args) {

  var internalSleep = function(ms, response) {

    return args.resolve(ms, response);
  }

  internalSleep.resolve = args.resolve;
  internalSleep.reject = args.reject;
  internalSleep.randomResolve = args.randomResolve;
  internalSleep.randomReject = args.randomReject;

  return internalSleep;

})({
  resolve: resolve,
  reject: reject,
  randomResolve: randomResolve,
  randomReject: randomReject
});

module.exports = sleep;
