function getIndexToIns(arr, num) {
  arr.sort(function(num1, num2) {
    return num1 - num2;
  });

  arr.forEach((curNum, curIndex) => {
    if (curNum > num) {
      arr.splice(curIndex, 0, num);
    }
  });

  if (arr.indexOf(num) === -1) {
    arr.push(num);
  }

  return arr.indexOf(num);
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
    console.log(actual);
  }
}

assertEqual(getIndexToIns([10, 20, 30, 40, 50], 35), 3);
assertEqual(getIndexToIns([10, 20, 30, 40, 50], 30), 2);
assertEqual(getIndexToIns([5, 3, 20, 3], 5), 2);
assertEqual(getIndexToIns([2, 5, 10], 15), 3);
assertEqual(getIndexToIns([2, 20, 10], 19), 2);


function getIndexToIns(arr, num) {
  // var tempArr = [];

  arr.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    // tempArr.push(arr[i]);
    var numIndex = arr.indexOf(arr[i]);

    if (arr[i] >= num) {
      return i;
      // arr.splice(i, 0, num);
    }
  }
  return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
