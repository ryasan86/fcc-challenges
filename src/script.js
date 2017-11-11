function mutation(arr) {
  var firstArray = arr[1].toLowerCase().split('');
  var secondArray = arr[0].toLowerCase().split('');

  return firstArray.every(function(letter) {
    return secondArray.indexOf(letter) !== -1;
  });
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

assertEqual(mutation(['hello', 'hey']), false);
assertEqual(mutation(['Alien', 'line']), true);
assertEqual(mutation(['Mary', 'Army']), true);
assertEqual(mutation(['voodoo', 'no']), false);