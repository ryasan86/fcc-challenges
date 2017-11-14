function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var chunks = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      chunks.push(arr[i]);
    } else {
      chunks.push(arr[i]);
      newArray.push(chunks);
      chunks = [];
    }
  }

  if (chunks.length !== 0) {
    newArray.push(chunks);
  }

  return newArray;
}

var output = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
console.log(output);
