function palindrome(str) {
  var alphaNumericString = str.toLowerCase().replace(/[^0-9a-z]/g, '');
  var reversed = alphaNumericString
    .split('')
    .reverse()
    .join('');
  return alphaNumericString === reversed;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(palindrome('eye'), true);
assertEqual(palindrome('_eye'), true);
assertEqual(palindrome('race Car'), true);
assertEqual(palindrome('not a palindrome'), false);
assertEqual(palindrome('0_0 (: /- :) 0-0'), true);
assertEqual(palindrome('five|_/|four'), false);
