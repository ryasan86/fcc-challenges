function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function findElement(arr, func) {
  var num = 0;

  arr = arr.filter(function(n) {
    return func(n);
  });

  num = arr[0];
  return num;
}

assertEquals(
  findElement([1, 3, 5, 8, 9, 10], function(num) {
    return num % 2 === 0;
  }),
  8
);

assertEquals(
  findElement([1, 3, 5, 9], function(num) {
    return num % 2 === 0;
  }),
  undefined
);
