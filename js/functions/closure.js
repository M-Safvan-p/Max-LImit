function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

// 🔥 Real Interview Example (Very Important)
// Private Variables using Closure
function createBankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    }
  };
}

const account = createBankAccount(1000);

account.deposit(500);  // 1500
account.withdraw(200); // 1300

// 👉 Here, balance is private.
// Nobody can directly access:

console.log(account.balance); // undefined


// 🔥 Famous Interview Trap (Loop + Closure Problem)
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output?
// 👉 4 4 4

// Why?
// Because var is function-scoped.
// All callbacks share the same i.
// ✅ Solution using let
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Output:
// 👉 1 2 3
// Because let creates block scope — new variable each iteration.