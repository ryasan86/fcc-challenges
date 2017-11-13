function translatePigLatin(str) {
  var array = str.split('');
  var firstLetterIsVowel = array[0].split('').some(element => {
    return element.match(/[aeiou]/gi);
  });
  var newArray = [];

  if (!firstLetterIsVowel) {
    newArray = array.slice(1, array.length);
    newArray.push(array[0]);
  } else {
    newArray = array.slice();
    newArray.push('w');
  }
  return newArray.join('') + 'ay';
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

function translatePigLatin(str) {
  var array = str.split('');
  var firstLetterIsVowel = array[0].split('').some(element => {
    return element.match(/[aeiou]/gi);
  });
  var newArray = [];

  if (!firstLetterIsVowel) {
    for (var i = 0; i < array.length; i++) {
      isVowel = array[i].split('').some(element => {
        return element.match(/[aeiou]/gi);
      });
      console.log(isVowel);
      if (!isVowel) {
        newArray = array.slice(i, array.length);
        newArray.push(array[i]);
        return newArray;
      }
    }
  } else {
    newArray = array.slice();
    newArray.push('w');
  }

  return newArray.join('') + 'ay';
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

// assertEqual(translatePigLatin('california'), 'aliforniacay');
// assertEqual(translatePigLatin('eight'), 'eightway');
assertEqual(translatePigLatin('glove'), 'oveglay');
// assertEqual(translatePigLatin('algorithm'), 'algorithmway');
// assertEqual(translatePigLatin('paragraphs'), 'aragraphspay');
