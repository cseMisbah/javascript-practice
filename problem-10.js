// Defining a function named max_of_three that takes three parameters: x, y, and z

const max_Of_Three_Values = (x, y, z) => {
  let maxValue = 0;
  if (x > y && x > z) {
    return (maxValue = x);
  } else if (y > x && y > z) {
    return (maxValue = y);
  } else {
    return (maxValue = z);
  }
};
console.log(max_Of_Three_Values(20, 10, 3));
