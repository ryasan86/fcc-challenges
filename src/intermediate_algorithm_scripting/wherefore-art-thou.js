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

// var actual1 = whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' }
//   ],
//   { last: 'Capulet' }
// );
// var expected1 = [{ first: 'Tybalt', last: 'Capulet' }];
// assertArrayEquals(actual1, expected1, 'should return 3rd item');

// var actual2 = whatIsInAName([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 });
// var expected2 = [{ a: 1 }, { a: 1 }, { a: 1, b: 2 }];
// assertArrayEquals(actual2, expected2, 'should return all items');

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
  var newArr = [];

  collection = collection.filter(function(el1, i, collections1) {
   return Object.keys(el1).length >= sourceKeys.length;
  });

  collection.forEach(function(el2, i, collections2) {
    var el2Copy = Object.assign({}, el2);   
    for (var prop in el2Copy) {
      console.log(prop, el2Copy[prop]);
    
    }
  });

  console.log(collection);

  return newArr;
}

console.log(actual3);


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
  b: 2
});
var expected4 = [{ a: 1, b: 2 }, { a: 1, b: 2, c: 2 }];
assertArrayEquals(actual3, expected4, 'should return first and third item');

function assertArrayEquals(actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
    return JSON.stringify(item) === JSON.stringify(expected[i]);
  });
  if (areEqualLength && areEqualItems) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected " ' + expected + ' but got "' + actual + '"');
  }
}

function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  var sourceVals = Object.values(source);

  collection.forEach(function(nameObj, i, array) {
    var nameObjVals = Object.values(nameObj);
    var nameObjKeys = Object.keys(nameObj);

    var allKeysMatch = sourceKeys.every(function(item, i) {
      return item === nameObjKeys[i];
    });
    var allValsMatch = sourceVals.every(function(item, i) {
      return item === nameObjVals[i];
    });

    if (allKeysMatch && allValsMatch) {
      arr.push(nameObj);
    }
  });
  return arr;
}


// var actual1 = whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' }
//   ],
//   { last: 'Capulet' }
// );
// var expected1 = [{ first: 'Tybalt', last: 'Capulet' }];
// assertArrayEquals(actual1, expected1, 'should return 3rd item');

// var actual2 = whatIsInAName([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 });
// var expected2 = [{ a: 1 }, { a: 1 }, { a: 1, b: 2 }];
// assertArrayEquals(actual2, expected2, 'should return all items');

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
  var newArr = [];

  collection.forEach(function(el1, i, collections1) {
    var elKeys1 = Object.keys(el1);
    elKeys1.length < sourceKeys.length ? collections1.splice(i, 1) : null;
  });

  collection.forEach(function(el, i) {
    var elClone = Object.assign({}, el);
    var elKeys = Object.keys(el);

    for (var prop in source) {
      if (elClone[prop] === source[prop]) {
        delete elClone[prop]; 
      }      
    }
    
    var elCloneKeys = Object.keys(elClone);
    if (elKeys.length > elCloneKeys.length) {
      newArr.push(el);
    }
  });

  return newArr;
}

console.log(actual3);
