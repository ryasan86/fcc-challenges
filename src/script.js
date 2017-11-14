function translatePigLatin(str) {
  var array = str.split('');

  function isFirstVowel(letter) {
    return letter.match(/[aeiou]/gi);
  }

  if (isFirstVowel(array[0])) {
    return array.join('') + 'way';
  } else {
    while (!isFirstVowel(array[0])) {
      array.push(array[0]);
      array.splice(0, 1);
    }
  }

  return array.join('') + 'ay';
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

assertEqual(translatePigLatin('california'), 'aliforniacay');
assertEqual(translatePigLatin('eight'), 'eightway');
assertEqual(translatePigLatin('glove'), 'oveglay');
assertEqual(translatePigLatin('algorithm'), 'algorithmway');
assertEqual(translatePigLatin('paragraphs'), 'aragraphspay');
