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

/*
function destroyer(arr) {

    var args = [...arguments];
    // convert arguments to an array
    args.splice(0, 1);
    // remove first array argument
    var tempArr = [];
    // placeholder
    for (var i = 0; i < arr.length; i++) {
        // loop through first array argument
        for (var j = 0; j < args.length; j++) {
            // loop through args length needs to be flexible
            if (arr[i] == args[j]) {
                delete arr[i];
                // if assigned value matches delete
            }
        }
    }
    // pass function to check if array element exists
    tempArr = arr.filter(removeFalsy);
    return tempArr;
    // return the remaining elements
    function removeFalsy(value) {
        return Boolean(value);
    }
}
var data = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(data);
*/