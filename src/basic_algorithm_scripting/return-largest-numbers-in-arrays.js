function largestOfFour(arr) {
  var newArray = [];
  arr.forEach(function(subArr) {
    var largestNumber = subArr[0];
    for (var i = 0; i < subArr.length; i++) {
      if (subArr[i] > largestNumber) {
        largestNumber = subArr[i];
      }
    }
    newArray.push(largestNumber);
  });
  return newArray;
}

function assertEqual(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualValues = actual.every(function(value, index) {
    return value === expected[index];
  });
  if (areEqualLength && areEqualValues) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]),
  [27, 5, 39, 1001]
);
assertEqual(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ]),
  [9, 35, 97, 1000000]
);
