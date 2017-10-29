// Your code here
myArray = [];
myArray.push('Ryan Santos');
myArray.push('ryansantos86');

var cutName = function(name) {
  var result = name.split(' ');
  return result;
};

var cutResult = cutName(myArray[0]);

var myInfo = {};
myInfo.fullName = cutResult;
myInfo.skype = myArray[1];
myInfo.github = 'ryasan86';

console.log(myInfo);
