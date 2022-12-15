const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
  'https://jsonplaceholder.typicode.com/users',
]

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json())
  })
).then((Results) => {
  console.log(Results[0])
  console.log(Results[1])
  console.log(Results[2])
})
