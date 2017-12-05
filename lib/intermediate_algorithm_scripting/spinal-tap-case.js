'use strict';

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

function spinalCase(str) {
  return str.toLowerCase().replace(/ /g, '-');
}

// assertEquals(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
assertEquals(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');