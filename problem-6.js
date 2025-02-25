//Write a JavaScript program to determine whether
// a given year is a leap year in the Gregorian

const year = parseInt(prompt("Enter an year :"));

if (year % 100 === 0) {
  if (year % 400 === 0) {
    document.getElementById("demo").innerHTML = `${year} is a leap year`;
  } else {
    document.getElementById("demo").innerHTML = `${year} is not a leap year`;
  }
} else {
  document.getElementById("demo").innerHTML = `${year} is not a leap year`;
}
