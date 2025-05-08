//Promise

const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(() => {
    myResolve("I love you");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("demo").innerHTML = value;
});
