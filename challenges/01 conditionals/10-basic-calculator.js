// You just need to implement the calculator function
function calculator(num1, num2, operator) {
  // Perform basic arithmetic operations using switch case
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    return "Invalid input. Both numbers must be valid.";
  }
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return `Cannot divide by zero`;
      }
      return num1 / num2;
    default:
      return `Invalid Operator`;
  }
}