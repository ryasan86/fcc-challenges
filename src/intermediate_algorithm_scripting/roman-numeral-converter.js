function convertToRoman(num) {
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumerals = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var result = '';

  for (var i = 0; i < numbers.length; i++) {
    while (numbers[i] <= num) {
      result += romanNumerals[i];
      num -= numbers[i];
    }
  }

  return result;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(convertToRoman(2), 'II');
assertEqual(convertToRoman(3), 'III');
assertEqual(convertToRoman(4), 'IV');
assertEqual(convertToRoman(5), 'V');
assertEqual(convertToRoman(9), 'IX');
assertEqual(convertToRoman(13), 'XIII');
var output = convertToRoman(9);
console.log(output);
