/*


function diffArray(arr1, arr2) {
  var newArr = [];
  var length1 = arr1.length;
  var length2 = arr2.length;
  var highest = Math.max(length1, length2);
  var lowest = Math.min(length1, length2);
  var diffValue = highest - lowest;
  arr1.sort(function(a, b) {
    return a - b;
  });
  arr2.sort(function(a, b) {
    return a - b;
  });

  var i = 0;
  while (i < diffValue) {
    for (var j = 0; j < diffValue; j++) {
      if (arr1[j] === arr2[j]) {
        console.log('arr1j', arr1[j]);
        console.log('arr2j', arr2[j]);
        delete arr1[j];
        delete arr2[j];
        i += 1;
      } else if (arr1[j] !== arr2[j]) {
        newArr.push(arr1[j]);
        console.log('new arr', newArr);
      } else {
        console.log('error');
      }
    }
  }
  return newArr;
}

diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);

function diffArray(arr1, arr2) {
  var newArr = [];
  var testArr1 = [];
  var testArr2 = [];
  var length1 = arr1.length;
  var length2 = arr2.length;
  if (length1 > length2) {
    highLength = arr1.length;
    console.log('HEY1', length1);
  } else {
    highLength = arr2.length;
    console.log('HEY2', length2);
  }

  var highLength = Math.max(length1, length2);
  var lowLength = Math.min(length1, length2);

  arr1.reverse();
  arr1.sort();
  arr2.reverse();
  arr2.sort();
  console.log('sort1', arr1);
  console.log('sort2', arr2);

  console.log('lowLength', lowLength);

  console.log(lowLength);
  for (var i = 0; i < lowLength; i++) {
    arr1.shift();
    arr2.shift();
    if (arr1[i] = arr2[i]) {
      console.log(i);
      console.log('one', arr1);
      console.log('two', arr2);
      console.log('more');
    } else {
      console.log('a', arr1);
      console.log('b', arr2);
      console.log('no more');
    }
  }
  newArr = arr2;
  return newArr;
  // return newArr;
}

diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);

*/
"use strict";