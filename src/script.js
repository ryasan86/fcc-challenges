function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

function addTogether() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    } else {
      return undefined;
    }
  }

  return sum;
}

assertEquals(addTogether(2, 3), 5);
assertEquals(addTogether('http://bit.ly/IqT6zt'), undefined);
// assertEquals(addTogether(2)(3), 5);
