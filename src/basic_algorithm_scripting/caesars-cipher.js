function rot13(str) {
  var newArr = [];
  var temp = [];
  var strArr = str.split('');
  var charCodesArr = [
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90
  ];

  // Loop strArr against charCodesArr.
  for (var i = 0; i < charCodesArr.length; i++) {
    for (var j = 0; j < strArr.length; j++) {
      if (charCodesArr[i] === strArr[j]) {
        temp.push(charCodesArr[i]);
      }
    }
  }
  console.log(temp);
  // If strArr[index] matches charCodesArr[index] get new char code chop.

  //   for (var k = 0; k < charCodesArr.length; k++) {
  //     for (var i = 0; i < str.length; i++) {
  //       var charCodePosition = str.charCodeAt(i);
  //     }
  //   }

  //   for (var j = 0; j < newArr.length; j++) {
  //     var newCode = String.fromCharCode(newArr[j]);
  //     console.log(newCode);
  //   }

  return newArr;
}

// Change the inputs below to test
var output = rot13('SERR PBQR PNZC');
console.log(output);
