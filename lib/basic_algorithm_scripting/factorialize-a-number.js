'use strict';

function factorialize(num) {
  var product = 1;
  for (var i = 0; i < num; i++) {
    product += product * i;
  }
  return product;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(factorialize(5), 120);
assertEqual(factorialize(10), 3628800);
assertEqual(factorialize(20), 2432902008176640000);
assertEqual(factorialize(0), 1);