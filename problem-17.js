//time-based greeting
const time = new Date().getHours();
let greeting = "";

if (time < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;
