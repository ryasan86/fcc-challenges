function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function smallestCommons(arr) {
  function sortArr() {
    arr.sort(function(a, b) {
      return a - b;
    });
  }

  sortArr();
  // get range
  for (var i = arr[0] + 1; i < arr[1]; i++) {
    arr.splice(i, 0, i);
  }

  sortArr();
  // find first occurrence of common nultiple
  function findGreatestCommonD(numA, numB) {
    return !numB ? numA : findGreatestCommonD(numB, numA % numB);
  }

  function findSmallestCommonM(numA, numB) {
    return numA * numB / findGreatestCommonD(numA, numB);
  }

  var multiple = arr[0];
  arr.forEach(function(num) {
    multiple = findSmallestCommonM(multiple, num);
  });

  return multiple;
}

assertEquals(smallestCommons([1, 5]), 60);
assertEquals(smallestCommons([5, 1]), 60);
assertEquals(smallestCommons([1, 13]), 360360);
assertEquals(smallestCommons([23, 18]), 6056820);
