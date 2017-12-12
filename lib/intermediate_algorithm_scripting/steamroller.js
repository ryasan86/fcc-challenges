'use strict';

function assertArrayEquals(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function (item, i) {
    return item === expected[i];
  });

  if (areEqualLength && areEqualItems) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function steamrollArray(arr) {
  var flattened = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      flattened = flattened.concat(steamrollArray(el));
    } else {
      flattened.push(el);
    }
  });

  return flattened;
}

assertArrayEquals(steamrollArray([[['a']], [['b']]]), ['a', 'b']);