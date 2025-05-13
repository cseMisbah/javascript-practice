import axios from "axios";

//4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// method for making HTTP Request
/*
const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const message = `Error : ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
deleteData();

//// another example with fetch and async await

{
  /*
       <div class="container">
      <ol></ol>
    </div>
    */
//}
/*
const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let lists = "";
      data.map((data, index) => {
        lists += `<li>${data.title}</li>`;
      });
      document.querySelector(".container ol").innerHTML = lists;
    });
};
loadData();
*/

/*
const loadAllTodos = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await res.json();
      let lists = "";
      todos.map((data) => {
        lists += `<li>${data.title}</li>`;
      });
      document.querySelector(".container ol").innerHTML = lists;
    } catch (error) {
      console.log(error);
    }
  };
  loadAllTodos();
  */
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "foooma",
    body: "barmmma",
    userId: 1,
  })
  .then((response) => console.log(response));
