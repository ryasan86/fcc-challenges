'use strict';

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function binaryAgent(str) {
  var bits = [128, 64, 32, 16, 8, 4, 2, 1];

  var charCodes = str.split(' ').map(function (el) {
    return bits.filter(function (bit, i) {
      return el[i] === '1';
    }).reduce(function (bitA, bitB) {
      return bitA + bitB;
    });
  });

  return charCodes.map(function (charCode) {
    return String.fromCharCode(charCode);
  }).join('');
}

assertEquals(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'), "Aren't bonfires fun!?");