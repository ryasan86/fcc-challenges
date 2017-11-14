'use strict';

function booWho(bool) {
  return typeof bool === 'boolean';
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

assertEqual(booWho([1, 2, 3]), false);