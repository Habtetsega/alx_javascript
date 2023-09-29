function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  }
}

function addBy(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  }
}

var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);

console.log(addBy100(20)); // Output: 120 (100 + 20)
console.log(addBy1000(50)); // Output: 1050 (1000 + 50)
console.log(divideBy10(50)); // Output: 5 (50 / 10)
console.log(divideBy100(500)); // Output: 5 (500 / 100)
