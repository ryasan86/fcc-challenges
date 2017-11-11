'use strict';

function repeatStringNumTimes(str, num) {
  var newString = '';
  for (var i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(repeatStringNumTimes('*', 3), '***');
assertEqual(repeatStringNumTimes('abc', 3), 'abcabcabc');
assertEqual(repeatStringNumTimes('abc', -2), '');