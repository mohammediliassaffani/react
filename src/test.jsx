const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
  'https://jsonplaceholder.typicode.com/users',
]

const getData = async function () {
  const [posts, albums, users] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json()))
  )
  console.log('posts', posts)
  console.log('albums', albums)
  console.log('users', users)
}
