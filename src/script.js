function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
    console.log(actual);
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

function spinalCase(str) {
  str = str.split('');
  str[0] = str[0].toLowerCase();

  return str
    .join('')
    .replace(/_/g, '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/\s\s/g, ' ')
    .replace(/\s/g, '-')
    .toLowerCase();
}

assertEquals(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
assertEquals(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
assertEquals(spinalCase('The_Andy_Griffith_Show'), 'the-andy-griffith-show');
assertEquals(spinalCase('Teletubbies say Eh-oh'), 'teletubbies-say-eh-oh');
