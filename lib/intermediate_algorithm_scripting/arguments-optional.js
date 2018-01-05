'use strict';

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

function addTogether() {
  var args = [].slice.call(arguments);
  // return undefined if any arguments are not numbers
  if (!args.every(function (arg) {
    return typeof arg === 'number';
  })) {
    return;
  }
  // case 1: if both arguments are provided
  if (args.length >= 2) {
    return args[0] + args[1];
    // case 2: if only one argument is provided return a function that calls addTogether
  } else {
    var arg1 = args[0];
    var sumArg1And = function sumArg1And(arg2) {
      return addTogether(arg1, arg2);
    };
    return sumArg1And;
  }
}

assertEquals(addTogether(2, 3), 5);
assertEquals(addTogether('http://bit.ly/IqT6zt'), undefined);
assertEquals(addTogether(2)(3), 5);