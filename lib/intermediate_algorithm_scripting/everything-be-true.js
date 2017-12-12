'use strict';

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function truthCheck(collection, pre) {
  return collection.every(function (obj) {
    for (var prop in obj) {
      return obj[pre];
    }
  });
}

assertEquals(truthCheck([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }, { user: 'Laa-Laa', sex: 'female' }, { user: 'Po', sex: 'female' }], 'sex'), true);
assertEquals(truthCheck([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy' }, { user: 'Laa-Laa', sex: 'female' }, { user: 'Po', sex: 'female' }], 'sex'), false);
assertEquals(truthCheck([{ user: 'Tinky-Winky', sex: 'male', age: 0 }, { user: 'Dipsy', sex: 'male', age: 3 }, { user: 'Laa-Laa', sex: 'female', age: 5 }, { user: 'Po', sex: 'female', age: 4 }], 'age'), false);