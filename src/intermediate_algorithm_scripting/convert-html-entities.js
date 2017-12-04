function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

function convertHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&​lt;')
    .replace(/>/g, '&​gt;')
    .replace(/"/g, '&​quot;')
    .replace(/'/g, '&​apos;');
}

assertEquals(convertHTML('Dolce & Gabbana'), 'Dolce &​amp; Gabbana');
assertEquals(
  convertHTML('Hamburgers < Pizza < Tacos'),
  'Hamburgers &​lt; Pizza &​lt; Tacos'
);
assertEquals(convertHTML('Sixty > twelve'), 'Sixty &​gt; twelve');
assertEquals(convertHTML("Shindler's List"), 'Shindler&​apos;s List');
assertEquals(convertHTML('<>'), '&​lt;&​gt;');
