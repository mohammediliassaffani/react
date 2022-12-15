const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000)
})
const promiseTow = new Promise((resolve, reject) => {
  setTimeout(reject, 3000)
})
Promise.all([promiseOne, promiseTow]).then((data) => console.log(data))
