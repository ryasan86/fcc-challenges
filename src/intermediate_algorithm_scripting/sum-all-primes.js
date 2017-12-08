function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function sumPrimes(num) {
  var nums = [];
  var numsObj = {};
  var primeNums = [];

  for (var i = 1; i <= num; i++) {
    nums.push(i);
  }

  nums.forEach(function(number) {
    numsObj[number] = 0;
    for (var i = 0; i < number; i++) {
      if (number % i === 0) {
        numsObj[number]++;
      }
    }
  });

  for (var prop in numsObj) {
    if (numsObj[prop] === 1) {
      primeNums.push(Number(prop));
    }
  }

  return primeNums.reduce(function(num0, num1) {
    return num0 + num1;
  });
}

assertEquals(sumPrimes(10), 17);
assertEquals(sumPrimes(977), 73156);
