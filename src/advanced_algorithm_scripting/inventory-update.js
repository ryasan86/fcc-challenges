function updateInventory(arr1, arr2) {
  arr2.forEach(newItem => {
    const found = arr1.find(item => item[1] === newItem[1]);
    const index = arr1.findIndex(item => item[1] === newItem[1]);
    if (!!found) {
      let item = arr1[index];
      item[0] = newItem[0] + item[0];
    } else {
      arr1.push(newItem);
    }
  });

  return arr1.sort((a, b) => (a[1] < b[1] ? -1 : 1));
}

console.log('h' > 'a');

const a = updateInventory(
  [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']],
  [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
  ]
);
console.log(a);

/*
[[88, "Bowling Ball"], 
[2, "Dirty Sock"], 
[3, "Hair Pin"], 
[3, "Half-Eaten Apple"], 
[5, "Microphone"], 
[7, "Toothpaste"]]
*/
