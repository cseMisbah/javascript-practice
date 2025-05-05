//Generating random number between 1 to 10
const randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber);

//taking user input to guess number between 1 to 10

const guessNumber = prompt("Guess the number between 1 to 10");

if (guessNumber === randomNumber) {
  console.log("Matched the number that you have given with random  number ");
} else {
  console.log("not matched", "The random number was : ", guessNumber);
}
