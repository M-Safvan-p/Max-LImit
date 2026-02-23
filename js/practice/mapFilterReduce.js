/**
 * @Map
 */
/*
===========================================
Question:
Add a new property to each object using map()
without modifying and modiying the original array.
===========================================
*/
function q1() {
  let array = [
    { name: "Aarav", age: 15 },
    { name: "Diya", age: 14 },
  ];

  let result = array.map((ob) => {
    return { ...ob, Status: "Pass" };
  });

  console.log(result);
  console.log(array);

  // above wihtout changing the original array
  console.log("--------------------");

  let result2 = array.map((ob) => {
    ob.Status = "Pass";
    return ob;
  });
  console.log(result2);
  console.log(array);
}

/*
===========================================
Question:
Create a sentence for each user showing their skills using map().
===========================================
*/

function formatUserSkills() {
  const users = [
    { name: "Safwan", skills: ["JS", "Node"] },
    { name: "Diya", skills: ["React"] },
  ];

  let result = users.map((user) => {
    return `${user.name} knows ${user.skills.join(", ")}`;
  });

  console.log(result);
}
// formatUserSkills();
// ["Safwan knows JS, Node", "Diya knows React"]

/*
===========================================
Question:
Calculate the final price of each product
including tax using map().
===========================================
*/

function calculateFinalPrices() {
  const products = [
    { name: "Laptop", price: 50000, tax: 18 },
    { name: "Phone", price: 20000, tax: 12 },
    { name: "Tablet", price: 30000, tax: 15 },
  ];

  let result = products.map((product) => {
    return {
      name: product.name,
      finalPrice: product.price + (product.price * product.tax) / 100,
    };
  });

  console.log(result);
}
// calculateFinalPrices();
// [
//   { name: "Laptop", finalPrice: 59000 },
//   { name: "Phone", finalPrice: 22400 },
//   { name: "Tablet", finalPrice: 34500 }
// ]

/**
 * @Filter
 */

function q2() {
  let number = [1, null, 5, null, 10];
  let result = number.filter((x) => x !== null);
  console.log(result);
}
/*
===========================================
Question:
Get the names of students who scored
80 or more in math using filter() and map().
===========================================
*/

function getTopStudents() {
  const students = [
    { name: "Aarav", math: 85 },
    { name: "Diya", math: 92 },
    { name: "Kabir", math: 76 },
    { name: "Maya", math: 89 },
    { name: "Arjun", math: 55 },
  ];

  let result = students.filter((x) => x.math >= 80).map((x) => x.name);
  console.log(result);
}
// getTopStudents();
// ["Aarav", "Diya", "Maya"]

/*
===========================================
Question:
Filter employees whose age is above 30
and salary is greater than 50000.
===========================================
*/

function filterEmployees() {
  const employees = [
    { name: "A", age: 25, salary: 40000 },
    { name: "B", age: 32, salary: 70000 },
    { name: "C", age: 28, salary: 60000 },
    { name: "D", age: 35, salary: 45000 }
  ];

  let filtered = employees.filter((employee) => {
    return employee.age > 30 && employee.salary > 50000;
  });

  console.log(filtered);
}
// filterEmployees(); 
// [{ name: "B", age: 32, salary: 70000 }]

/*
===========================================
Question:
Remove duplicate values from an array
using two different methods.
===========================================
*/

function removeDuplicates() {
  const numbers = [1, 2, 3, 2, 4, 1, 5, 3, 6];

  let check = {};
  let uniqueWithObj = numbers.filter((x) => {
    if (!check[x]) {
      check[x] = x;
      return x;
    }
  });

  let uniqueWithOutObj = numbers.filter((value, index, array) => {
    return array.indexOf(value) === index;
  });

  console.log(uniqueWithObj);
  console.log(uniqueWithOutObj);
}
// removeDuplicates();
// [1,2,3,4,5,6]
// [1,2,3,4,5,6]

/**
 * @Reduce
 */
/*
===========================================
Question:
Calculate the total price of all items using reduce().
===========================================
*/
function getTotalPrice() {
  let number = [
    { item: "Pen", price: 10 },
    { item: "Book", price: 50 },
  ];

  let result = number.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  console.log(result);
}
// getTotalPrice(); // 60

/*
===========================================
Question:
Count the occurrence of each fruit using reduce().
===========================================
*/
function countFruits() {
  let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

  let result = fruits.reduce((acc, cur) => {
    acc[cur] = (acc[cur] | 0) + 1;
    return acc;
  }, {});

  console.log(result);
}
// countFruits();
// { apple: 3, banana: 2, orange: 1 }

/*
===========================================
Question:
Find the maximum value in an array using reduce().
===========================================
*/

function findMax() {
  const values = [12, 45, 7, 89, 34];

  let result = values.reduce((acc, cur) => {
    if (acc < cur) acc = cur;
    return acc;
  }, 0);

  console.log(result);
}
// findMax(); // 89

/*
===========================================
Question:
Separate even and odd numbers from an array using reduce().
===========================================
*/

function separateEvenOdd() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let result = nums.reduce(
    (acc, cur) => {
      if (cur % 2 == 0) {
        acc.even.push(cur);
      } else {
        acc.odd.push(cur);
      }
      return acc;
    },
    { even: [], odd: [] },
  );

  console.log(result);
}
// separateEvenOdd();
// { even: [2,4,6,8], odd: [1,3,5,7,9] }



