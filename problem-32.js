//fetch data
/*
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

setTimeout(() => {
  console.log("Hello world");
}, [3000]);

fetch("https://jsonplaceholder.typicode.co/posts")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// can not catch server error
fetch("https://jsonplaceholder.typicode.com/posts/101")
  .then((response) => response.json())
  .then((json) => console.log(json));  

// solution: add an if statement
fetch("https://jsonplaceholder.typicode.com/posts/101")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error("Server error");
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
*/

//Reduce
/*
const products = [
  { id: 1, name: "x", price: 300 },
  { id: 2, name: "y", price: 400 },
  { id: 3, name: "z", price: 500 },
];

const total = products
  .map((product) => product.price)
  .reduce((acc, current) => acc + current);
*/
