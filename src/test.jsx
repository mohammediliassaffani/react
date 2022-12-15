fetch('https://jsonplaceholder.typicode.com/users')
  .then((resp) => resp.json())
  .then(console.log())
