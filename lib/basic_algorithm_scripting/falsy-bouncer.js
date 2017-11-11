'use strict';

function bouncer(arr) {
  var filteredArray = arr.filter(Boolean);
  return filteredArray;
}

function assertEqual(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualValues = actual.every(function (actualValue, index) {
    return actualValue === expected[index];
  });
  if (areEqualLength && areEqualValues) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
assertEqual(bouncer([false, null, 0, NaN, undefined, '']), []);