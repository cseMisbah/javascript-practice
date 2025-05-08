{
  /* <input type="text" id="age" value="18" />
    <button onclick="myFunction()">Try it</button>
    <p id="demo"></p>*/
}
const myFunction = () => {
  let voteable;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "input is not a number ";
  } else {
    voteable = age < 18 ? "too young" : "too old";
  }
  document.getElementById("demo").innerHTML = voteable + " to vote";
};
