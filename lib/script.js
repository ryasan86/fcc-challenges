'use strict';

var _underscore = require('underscore');

function sym(args) {
  args = [].concat(Array.prototype.slice.call(arguments));
  var arrC = [];
  var arrA = args[0];
  var arrB = args[1];
  // find the difference between 2 arrays

  arrA.forEach(function (item) {
    if (arrB.indexOf(item) === -1) {
      arrC.push(item);
    }
  });

  arrB.forEach(function (item) {
    if (arrA.indexOf(item) === -1) {
      arrC.push(item);
    }
  });

  // if there are more than 2 arrays hold the symetric difference value in a variable
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));