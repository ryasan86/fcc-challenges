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

function checkCashRegister(price, cash, cid) {
  let change = [];
  let changeDue = cash - price;
  cid = cid.reverse();

  cid.forEach(c => {
    const moneyName = c[0];
    let leftInDrawer = c[1];
    const moneyVal = money[moneyName];

    if (moneyVal <= changeDue && changeDue > 0) {
      const fromDrawer = drainDrawer(moneyVal, leftInDrawer, changeDue);
      change.push([moneyName, fromDrawer]);
      changeDue -= fromDrawer;
      c[1] -= fromDrawer;
    }
  });

  return checkChangeDue(changeDue, cid) || change;
}

const drainDrawer = (moneyVal, leftInDrawer, changeDue) => {
  let result = 0;

  while (leftInDrawer > 0 && changeDue > 0 && changeDue - moneyVal >= 0) {
    changeDue -= moneyVal;
    leftInDrawer -= moneyVal;
    result += moneyVal;
    leftInDrawer = Math.round(leftInDrawer * 100) / 100;
    changeDue = Math.round(changeDue * 100) / 100;
    result = Math.round(result * 100) / 100;
  }

  return result;
};

const checkChangeDue = (changeDue, cid) => {
  if (changeDue === 0 && checkCID(cid)) {
    return 'Closed';
  } else if (changeDue > 0) {
    return 'Insufficient Funds';
  }
};

const checkCID = cid => {
  return cid.every(c => c[1] === 0);
};

const a = checkCashRegister(19.5, 20.0, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1.0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
]);

console.log(a);
