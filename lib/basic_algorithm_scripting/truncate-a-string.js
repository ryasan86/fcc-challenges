'use strict';

function truncateString(str, num) {
  var newString = '';
  if (num <= 3) {
    newString = str.slice(0, num) + '...';
  } else if (num >= str.length) {
    newString = str;
  } else {
    newString = str.slice(0, num - 3) + '...';
  }
  return newString;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(truncateString('A-tisket a-tasket A green and yellow basket', 11), 'A-tisket...');
assertEqual(truncateString('Peter Piper picked a peck of pickled peppers', 14), 'Peter Piper...');
assertEqual(truncateString('A-', 1), 'A...');
assertEqual(truncateString('Absolutely Longer', 2), 'Ab...');
assertEqual(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length), 'A-tisket a-tasket A green and yellow basket');
assertEqual(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2), 'A-tisket a-tasket A green and yellow basket');