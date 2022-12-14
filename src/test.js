const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('stuff worked')
  } else {
    reject('error it broked')
  }
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'hiii')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'hooooo')
})
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'hoaaaa')
})
promise.all([promise, promise2, promise3, promise4]).then((value) => {
  console.log(value)
})
