//displaying array with for each function

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";

fruits.forEach(myFunction);

text += "</ul>";
document.getElementById("demo").innerHTML = text;
function myFunction(value) {
  text += "<li>" + value + "</li>";
}
*/

{
  /*<button onclick="myFunction()">Try it</button>*/
}
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML = fruits;

const myFunction = () => {
  fruits.push("lemon");
  document.getElementById("demo").innerHTML = fruits;
};
*/
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "</br>";
  }
}
document.getElementById("demo").innerHTML = x;
