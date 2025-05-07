// Define a function named sumTriple that takes two parameters, x and y
const sumTriple = (x, y) => {
  if (x == y) {
    return 3 * (x + y);
  } else {
    return x + y;
  }
};
console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));
