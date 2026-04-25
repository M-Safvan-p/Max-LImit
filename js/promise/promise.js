/*
===========================================
Question:
What is the output?
===========================================
*/

function runTest() {
  async function test() {
    console.log("1");

    await Promise.resolve();

    console.log("2");
  }

  console.log("3");
  test();
  console.log("4");
}

// runTest();

// Expected:
// 3
// 1
// 4
// 2



/*
===========================================
Question:
Handle promise rejection using try/catch with async/await.
===========================================
*/

async function fetchData() {
  try {
    let res = await Promise.reject("Failed");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

// Example
fetchData();



/*
===========================================
Question:
What happens if you don't return inside then()?
===========================================
*/

Promise.resolve(1)
  .then((x) => {
    x + 1; // no return
  })
  .then((x) => console.log(x));

// Expected:
// undefined



/*
===========================================
Question:
Create a promise that resolves or rejects randomly.
===========================================
*/

function randomPromise() {
  return new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;

    if (success) resolve("Success");
    else reject("Failed");
  });
}

// Example
randomPromise()
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("End"));


  /*
===========================================
Question:
Execute async tasks in sequence using Promises.
===========================================
*/

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

// Approach: Promise chaining
loginUser()
  .then(() => getProfile())
  .then(() => getOrders())
  .then(() => console.log("All done"))
  .catch(console.log);

/*
===========================================
Approach:
Using async/await
===========================================
*/

async function run() {
  try {
    await loginUser();
    await getProfile();
    await getOrders();
    console.log("All done");
  } catch (err) {
    console.log(err);
  }
}

// Example
run();
