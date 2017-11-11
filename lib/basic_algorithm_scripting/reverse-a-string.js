'use strict';

function reverseString(str) {
  return str.split('').reverse().join('');
}

var output = reverseString('hello');
console.log(output);