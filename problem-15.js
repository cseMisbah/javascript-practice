//comparing today's date with January 14, 2100

let text = "";
const today = new Date();
const someDay = new Date();
someDay.setFullYear(2100, 0, 14);

if (someDay > today) {
  text = "Today is before January 14, 2100";
} else {
  text = "Today is after January 14, 2100";
}
document.getElementById("demo").innerHTML = text;
