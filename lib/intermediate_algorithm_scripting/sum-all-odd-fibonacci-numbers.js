'use strict';

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function sumFibs(num) {
  var prevFib = 0;
  var currFib = 1;
  var result = 0;

  while (currFib <= num) {
    if (currFib % 2 !== 0) {
      result += currFib;
    }
    var added = prevFib + currFib;
    prevFib = currFib;
    currFib = added;
  }

  return result;
}

assertEquals(sumFibs(4), 5);