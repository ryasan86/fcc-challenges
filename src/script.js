var actual1 = whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);
var expected1 = [{ first: 'Tybalt', last: 'Capulet' }];
assertArrayEquals(actual1, expected1, 'should return 3rd item');

var actual2 = whatIsInAName([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 });
var expected2 = [{ a: 1 }, { a: 1 }, { a: 1, b: 2 }];
assertArrayEquals(actual2, expected2, 'should return all items');

var actual3 = whatIsInAName([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], {
  a: 1,
  c: 2
});
var expected4 = [{ a: 1, b: 2, c: 2 }];
assertArrayEquals(actual3, expected4, 'should return first and third item');

function assertArrayEquals(actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
    return JSON.stringify(item) === JSON.stringify(expected[i]);
  });

  if (areEqualLength && areEqualItems) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log(
      'FAILED [' +
        testName +
        '] Expected " ' +
        JSON.stringify(expected) +
        ' but got "' +
        JSON.stringify(actual) +
        '"'
    );
  }
}

function whatIsInAName(collection, source) {
  var sourceKeys = Object.keys(source);
  
  return collection.filter(function(el) {
    for (var i = 0; i < sourceKeys.length; i++) {
      if (!el.hasOwnProperty(sourceKeys[i]) || el[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}