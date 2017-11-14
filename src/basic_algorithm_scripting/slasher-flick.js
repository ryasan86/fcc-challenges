function slasher(arr, howMany) {
  for (var i = 0; i < howMany; i++) {
    arr.shift();
  }

  return arr;
}

function assertEqual(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var haveEqualValues = actual.every(function(actualValue, index) {
    return actualValue === expected[index];
  });

  if (areEqualLength === haveEqualValues) {
    console.log('PASSED');
  } else {
    console.log('FAILED', actual);
  }
}

assertEqual(slasher([1, 2, 3], 9), []);
