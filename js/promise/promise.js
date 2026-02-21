// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("After 6 sec Resolved")
//     },6000);

//     setTimeout(()=> {
//         reject("after 3 sec rejected");
//     },3000)
// });

// promise.then((result)=> {
//     console.log(result)
// }).catch((error)=> {
//     console.log(error);
// })

// function payment(amount, balance) {
//   return new Promise((resolve, reject) => {
//     if (amount > balance) {
//       reject("Insuffienct balance");
//     } else {
//       resolve(`${amount} : Debited`);
//     }
//   });
// }

// payment(100000,1000)
//     .then((result)=> console.log(result))
//     .catch((result)=> console.log(result))

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login user");
      resolve();
    }, 2000);
  });
}

function getProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetch user profile");
      resolve();
    }, 2000);
  });
}

function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetch Order Details");
      resolve();
    }, 2000);
  });
}

// loginUser()
// .then(()=> getProfile())
// .then(()=> getOrders())
// .then(()=> console.log("All done"))
// .catch(err => console.log(err));

async function tryAsync() {
  getProfile();
  getOrders();
  console.log("End");
}
tryAsync();
