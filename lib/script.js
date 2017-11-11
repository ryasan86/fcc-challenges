'use strict';

function confirmEnding(str, target) {
  var targetLength = target.length;
  var strLength = str.length;
  var newString = str.substr(strLength - targetLength);
  return target === newString;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(confirmEnding('Bastian', 'n'), true);
assertEqual(confirmEnding('Conner', 'n'), false);
assertEqual(confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification'), false);
assertEqual(confirmEnding('He has to give me a new name', 'name'), true);