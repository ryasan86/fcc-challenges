function assertArrayEquals(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
    return item === expected[i];
  });

  if (areEqualLength && areEqualItems) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

function dropElements(arr, func) {
  // Drop them elements.
  return arr;
}

assertArrayEquals(
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  }),
  [3, 4]
);
assertArrayEquals(
  dropElements([0, 1, 0, 1], function(n) {
    return n === 1;
  }),
  [1, 0, 1]
);