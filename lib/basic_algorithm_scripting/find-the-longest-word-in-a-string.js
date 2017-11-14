'use strict';

function findLongestWord(str) {
  var longestWord = '';

  str.split(' ').forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord.length;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(findLongestWord('The quick brown fox jumped over the lazy dog'), 6);
assertEqual(findLongestWord('What if we try a super-long word such as otorhinolaryngology'), 19);