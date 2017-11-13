function convertToRoman(num) {
  num = num.toString();
  // symbols
  var numbers = [1, 5, 10, 50, 100, 500, 1000];
  var romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var result = [];
  // if between 1 and 3

  // if between 6 and 9
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
    console.log(actual);
  }
}

assertEqual(convertToRoman(2), 'II');
assertEqual(convertToRoman(3), 'III');
assertEqual(convertToRoman(4), 'IV');
assertEqual(convertToRoman(5), 'V');
assertEqual(convertToRoman(9), 'IX');
assertEqual(convertToRoman(12), 'XII');
