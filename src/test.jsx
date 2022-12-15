async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await resp.json()
  console.log(data)
}
