function multiplyNumbers(a, b) {
  //var a = 5;
  //var b = 10;
  return a * b;
}

let result = multiplyNumbers(5, 10);
console.log("The result is: " + result); // TODO: Add the code here

function calculate(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;

      case "subtract":
        return num1 - num2;

        case "multiply":
          return num1 * num2;

          case "divide":
            return num1 / num2;
  }
}
console.log(calculate(5, 10, "add"));
console.log(calculate(5, 10, "subtract"));
console.log(calculate(5, 10, "multiply"));
console.log(calculate(5, 10, "divide"));