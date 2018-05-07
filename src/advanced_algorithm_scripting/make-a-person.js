var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFirstName = () => {
    return firstAndLast.split(' ')[0];
  };
  this.getLastName = () => {
    return firstAndLast.split(' ')[1];
  };
  this.getFullName = () => {
    return firstAndLast;
  };

  this.setFirstName = first => {
    const newLast = firstAndLast.match(/\s\w+/);
    firstAndLast = first + newLast;
  };
  this.setLastName = last => {
    const newFirst = firstAndLast.match(/\w+/);
    firstAndLast = newFirst + ' ' + last;
  };

  this.setFullName = firstAndLastName => {
    firstAndLast = firstAndLastName;
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setFirstName('Chris'));
console.log(bob.getFullName());
console.log(bob.setLastName('Howard'));
console.log(bob.getFullName());
console.log(bob.setFullName('Rick James'));
console.log(bob.getFullName());
