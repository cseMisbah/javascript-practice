//Fetch
const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error! status : ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data fetched successfully :", data);
  })
  .catch((error) => {
    console.log("Failed to fetch data", error);
  });
