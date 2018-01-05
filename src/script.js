import { isEqual } from 'underscore';

function sym(args) {
  args = [...arguments];
  let arrC = [];
  let arrA = args[0];
  let arrB = args[1];
  // find the difference between 2 arrays

  arrA.forEach(function(item) {
    if (arrB.indexOf(item) === -1) {
      arrC.push(item);
    }
  });

  arrB.forEach(function(item) {
    if (arrA.indexOf(item) === -1) {
      arrC.push(item);
    }
  });

  // if there are more than 2 arrays hold the symetric difference value in a variable

}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
