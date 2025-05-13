//Higher order function

const calculate = (num1, num2, operation) => {
  return operation(num1, num2);
};

const add = (num1, num2) => {
  return num1 + num2;
};

const subtruct = (num1, num2) => {
  return num1 - num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

console.log(calculate(10, 10, add));
console.log(calculate(10, 5, subtruct));
console.log(calculate(12, 6, divide));
