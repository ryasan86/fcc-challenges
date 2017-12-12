function assertArrayEquals(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
    return item === expected[i];
  });

  if (areEqualLength && areEqualItems) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function dropElements(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      return arr.slice(i);
    }
  }

  return [];
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
assertArrayEquals(
  dropElements([1, 2, 3, 4], function(n) {
    return n > 5;
  }),
  []
);
assertArrayEquals(
  dropElements([1, 2, 3, 7, 4], function(n) {
    return n > 3;
  }),
  [7, 4]
);
assertArrayEquals(
  dropElements([1, 2, 3, 9, 2], function(n) {
    return n > 2;
  }),
  [3, 9, 2]
);
