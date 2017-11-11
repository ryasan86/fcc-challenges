"use strict";

function sumAll(arr) {
  var newArr = [];
  var first = arr[0];
  var second = arr[1];
  var lowest = Math.min(first, second);
  var highest = Math.max(first, second);
  arr.sort(function (a, b) {
    return a - b;
  });

  var x = arr.shift();
  arr.unshift(x);

  while (x <= highest) {
    newArr.push(x);
    x += 1;
  }
  var result = newArr.reduce(function (increase, currentvalue) {
    return increase + currentvalue;
  });
  return result;
}

var data = sumAll([10, 5]);
console.log(data);