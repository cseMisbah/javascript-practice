//Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dateName = days[date.getDay()];

console.log(`Today is :${dateName}`);

//Finding current time

let hours = date.getHours();
let minutes = date.getMinutes();
let Seconds = date.getSeconds();
let pmAm = hours >= 12 ? "PM" : "AM";

//converting 24 hours format to 12 hours format

hours = hours >= 12 ? hours - 12 : hours;

//checking for when hour is 0 for PM

if (hours === 0 && pmAm === "PM") {
  if (minutes === 0 && Seconds === 0) {
    hours = 12;
    pmAm = "Noon";
  } else {
    hours = 12;
    pmAm = "PM";
  }
}

//checking for when hour is 0 for AM

if (hours === 0 && pmAm === "AM") {
  if (minutes === 0 && Seconds === 0) {
    hours = 12;
    pmAm = "Midnight";
  } else {
    hours = 12;
    pmAm = "AM";
  }
}
console.log(
  "Current Time: " + hours + pmAm + " : " + minutes + " : " + Seconds
);
