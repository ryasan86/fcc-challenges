"use strict";

function getIndexToIns(arr, num) {
  // var tempArr = [];

  arr.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    // tempArr.push(arr[i]);
    var numIndex = arr.indexOf(arr[i]);

    if (arr[i] >= num) {
      return i;
      // arr.splice(i, 0, num);
    }
  }
  return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));