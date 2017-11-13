function myReplace(str, before, after) {
  return str
    .split(' ')
    .map(function(word) {
      if (word === before) {
        if (word[0] === word[0].toUpperCase()) {
          var rest = after
            .split('')
            .slice(1, after.length)
            .join('');
          return word.replace(word, after[0].toUpperCase() + rest);
        } else {
          return word.replace(word, after);
        }
      } else {
        return word;
      }
    })
    .join(' ');
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

assertEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);

assertEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
