//Find positive numbers by using callback function

const myNumbers = [3, -9, 0, 4, -6, -4, 6, -8];

const positiveNumbers = removeNegativeNumbers(myNumbers, (x) => x >= 0);

document.getElementById("demo").innerHTML = positiveNumbers;

function removeNegativeNumbers(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
