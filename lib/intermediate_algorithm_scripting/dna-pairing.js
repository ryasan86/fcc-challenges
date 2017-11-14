'use strict';

function pairElement(str) {
  str = str.split('');
  var newArr = [];

  str.forEach(function (letter) {
    if (letter === 'A') {
      newArr.push(['A', 'T']);
    } else if (letter === 'C') {
      newArr.push(['C', 'G']);
    } else if (letter === 'G') {
      newArr.push(['G', 'C']);
    } else if (letter === 'T') {
      newArr.push(['T', 'A']);
    }
  });

  return newArr;
}

var output = pairElement('CTCTA');
console.log(output);