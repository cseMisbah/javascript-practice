const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(`Error: ${xhr.status}`);
      }
    };
    xhr.onerror = () => reject("Network error");
    xhr.send();
  });
};

const url = "https://jsonplaceholder.typicode.com/posts/1";

fetchData(url)
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Failed to fetch data:", error);
  });
