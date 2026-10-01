console.log("I am connected");

const userDiv = document.getElementById("div");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    data.forEach((post) => {
      userDiv.innerHTML += `
        <h3>ID: ${post.id}</h3>
        <h4>${post.title}</h4>
        <p>${post.body}</p>
      `;
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });