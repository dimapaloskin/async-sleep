'use strict';

var Promise = require('any-promise');

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

var sleep = (function(args) {

  var internalSleep = function(ms, response) {

    return args.resolve(ms, response);
  }

  internalSleep.resolve = args.resolve;
  internalSleep.reject = args.reject;

  return internalSleep;

})({
  resolve: resolve,
  reject: reject
});

module.exports = sleep;
