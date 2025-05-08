//Promise
/*
const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(() => {
    myResolve("I love you");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("demo").innerHTML = value;
});
*/
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

document.getElementById("demo").innerHTML = "First number over 18 is " + first;

function myFunction(value, index, array) {
  return value > 18;
}
