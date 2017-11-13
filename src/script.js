function rot13(str) {
  str = str.split('');

  for (var i = 0; i < str.length; i++) {
    var charCode = str[i].charCodeAt(0);

    if (charCode < 78) {
      charCode = charCode + 13;
      str[i] = String.fromCharCode(charCode);
    } else if (charCode >= 78 && charCode <= 90) {
      console.log(charCode);
    }
  }

  return str;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
    console.log(actual);
  }
}

assertEqual(rot13('EFG'), 'RST');
// assertEqual(rot13('SERR PBQR PNZC'));
// assertEqual(rot13('SERR CVMMN!'), 'FREE PIZZA!');
// assertEqual(rot13('SERR YBIR?'), 'FREE LOVE?');
// assertEqual(
//   rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'),
//   'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.'
// );
