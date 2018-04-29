const money = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  'ONE HUNDRED': 100
};

function checkCashRegister(
  price,
  cash,
  cid,
  cidReversed,
  changeDue,
  change = []
) {
  if (!cidReversed) {
    cid = cid.filter(item => {
      return item[1] !== 0;
    });
    cid = cid.reverse();
    cidReversed = true;
  }

  changeDue = changeDue || cash - price;
  
  let currBill = cid.find(bill => {
    return money[bill[0]] <= changeDue;
  });
  
  let result = [currBill[0], 0];
  
  while (changeDue >= money[currBill[0]] && currBill[1] > 0) {
    changeDue = Math.round(changeDue * 100) / 100;
    result[1] += money[currBill[0]];
    currBill[1] -= money[currBill[0]];
    changeDue -= money[currBill[0]];
  }
  
  if (currBill[1] === 0) {
    const index = cid.indexOf(currBill);
    cid.splice(index, 1);
  }

  change.push(result);

  if (changeDue === 0 && !cid) {

  }
}

let y = checkCashRegister(19.5, 20.0, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
]);

console.log(y);
// let x = checkCashRegister(3.26, 100.0, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90.0],
//   ['FIVE', 55.0],
//   ['TEN', 20.0],
//   ['TWENTY', 60.0],
//   ['ONE HUNDRED', 100.0]
// ]);
// console.log(x);
// [
//   // should return
//   (['TWENTY', 60.0],
//   ['TEN', 20.0],
//   ['FIVE', 15.0],
//   ['ONE', 1.0],
//   ['QUARTER', 0.5],
//   ['DIME', 0.2],
//   ['PENNY', 0.04])
// ];
