'use strict';

function destroyer(arr) {
  var args = [].concat(Array.prototype.slice.call(arguments));
  args.splice(0, 1);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
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

assertEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
assertEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);