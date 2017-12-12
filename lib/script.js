'use strict';

function assertEquals(actual, expected, testNumber) {
  if (actual === expected) {
    console.log(testNumber, 'PASSED');
    console.log(actual);
  } else {
    console.log(testNumber, 'FAILED');
    console.log(testNumber, actual);
  }
}

function telephoneCheck(str) {
  var r;

  if (str.length === 11) {
    r = /1\d+/;
  } else if (str.match(/\(/) && str.match(/\)/)) {
    r = /^1?\s?\(\d{3}\)[-\s]?\d{3}[-\s]\d{4}/;
  } else {
    r = /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}/;
  }

  return r.test(str);
}

assertEquals(telephoneCheck('555-555-5555'), true);
assertEquals(telephoneCheck('555 555 5555'), true);
assertEquals(telephoneCheck('1 555 555 5555'), true);
assertEquals(telephoneCheck('555-5555'), false);
assertEquals(telephoneCheck('5555555'), false);
assertEquals(telephoneCheck('1 555 555 5555'), true);
assertEquals(telephoneCheck('(555) 555-5555'), true);
assertEquals(telephoneCheck('(555)555-5555'), true, 1);
assertEquals(telephoneCheck('1 (555) 555-5555'), true, 2);
assertEquals(telephoneCheck('1 555)555-5555'), false, 3);
assertEquals(telephoneCheck('-1 (757) 622-7382'), false, 4);
assertEquals(telephoneCheck('5555555555'), true, 5);
assertEquals(telephoneCheck('2 (757) 622-7382'), false);
assertEquals(telephoneCheck('27576227382'), false, 6);