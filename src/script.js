function addTogether() {
  let args = [].slice.call(arguments);
  // return undefined if any arguments are not numbers
  if (
    !args.every(function(arg) {
      return typeof arg === 'number';
    })
  ) {
    return;
  }
  // case 1: if both arguments are provided
  if (args.length >= 2) {
    return args[0] + args[1];
    // case 2: if only one argument is provided return a function that calls addTogether
  } else {
    let arg1 = args[0];
    let sumArg1And = function(arg2) {
      return addTogether(arg1, arg2);
    };
    return sumArg1And;
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether([3]));
console.log(addTogether('http://bit.ly/IqT6zt'));
