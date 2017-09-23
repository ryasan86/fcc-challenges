function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  function check(element) {
    if (arr1.indexOf(element) === -1 || arr2.indexOf(element) === -1) {
      return element;
    }
  }
  return newArr.filter(check);
}

var data = diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);
