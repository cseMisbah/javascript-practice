/*
setInterval(myFunction, 1000);

function myFunction() {
  const d = new Date();
  document.getElementById("demo").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    
}

const myDisplayer = (some) => {
  document.getElementById("demo").innerHTML = some;
};

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("ok");
  } else {
    myReject("Error");
  }
});
myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(
    function () {
      myResolve("I love you");
    },
    [3000]
  );
});
myPromise.then((value) => {
  document.getElementById("demo").innerHTML = value;
});

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love Bangladesh");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
myDisplay();

*/
