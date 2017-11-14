function titleCase(str) {
  var array = str.split(' ');
  var newArray = [];

  array.forEach(function(word) {
    word = word[0].toUpperCase() + word.toLowerCase().substring(1, word.length);
    newArray.push(word);
  });

  return newArray.join(' ');
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(titleCase("I'm a little tea pot"), "I'm A Little Tea Pot");
assertEqual(titleCase('sHoRt AnD sToUt'), 'Short And Stout');
