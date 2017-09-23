function sumAll(arr) {
  var newArr = [];
  var first = arr[0];
  var second = arr[1];
  var lowest = Math.min(first, second);
  var highest = Math.max(first, second);
  var x = arr.shift();

  while (x <= second) {
    newArr.push(x);
    x += 1;
  }
  var result = newArr.reduce((increase, currentvalue) => {
    return increase + currentvalue;
  });
  return result;
}

var data = sumAll([4, 2]);
console.log(data);
