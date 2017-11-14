'use strict';

function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  var end = str.charCodeAt(str.length - 1);

  for (var i = start; i <= end; i++) {
    var index = str.indexOf(String.fromCharCode(i));

    if (!str[index]) {
      return String.fromCharCode(i);
    }
  }
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

assertEqual(fearNotLetter('abcdefghjklmno'), 'i');