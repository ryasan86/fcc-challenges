function fearNotLetter(str) {
  return str;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
    console.log(actual);
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

var output = fearNotLetter('abce');
console.log(output);
