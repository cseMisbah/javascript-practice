{
  /*<button onclick="myFunction()">try it</button>;*/
}
function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = text;
}
/*
const myFunction = () => {
  let text = "";
  if (confirm("Press a button !")) {
    text = "You pressed ok";
  } else {
    text = "you pressed the cancel button";
  }
  document.getElementById("demo").innerHTML = text;
};
*/
