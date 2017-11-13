function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  console.log(sourceKeys);

  // loop over array

  // check each objects key value pair

  console.log(arr);
  
  return arr;
}

// var output = whatIsInAName([{ a: 1 }, { a: 2 }], { a: 1 });
// console.log(output); // should be -> [{ a: 1 }]
var output2 = whatIsInAName([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], {
  a: 1,
  c: 2
});
console.log(output2); //  should be -> [{ a: 1, b: 2, c: 2 }]
