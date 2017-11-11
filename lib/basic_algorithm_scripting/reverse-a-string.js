'use strict';

function reverseString(str) {
  return str.split('').reverse().join('');
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(reverseString('hello'), 'olleh');