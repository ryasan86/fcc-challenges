'use strict';

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
    console.log(actual);
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

function sumFibs(num) {
  var fibs = [];
  var count = 0;

  while (count < num) {
    fibs.push(count);
    count++;
  }

  return fibs;
}

assertEquals(sumFibs(4), 5);