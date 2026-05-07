/*
===========================================
Question:
Move even numbers to the beginning of the array.
===========================================
*/

function moveEvenToStart(arr) {
  let even = [];
  let odd = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  return even.concat(odd);
}

/*
===========================================
Approach:-  Two Pointer (In-place)
===========================================
*/

function moveEvenToStartInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] % 2 === 0) {
      left++;
    } else if (arr[right] % 2 !== 0) {
      right--;
    } else {
      // swap
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr;
}

// Example
// let array = [2, 5, 1, 7, 2, 4, 6];
// console.log(moveEvenToStart(array));
// console.log(moveEvenToStartInPlace([...array]));


/*
===========================================
Question:
Find the prefix sum array.
===========================================
*/

function prefixSum(arr) {
  let result = [];
  let prev = 0;

  for (let num of arr) {
    let value = prev + num;
    prev = value;
    result.push(value);
  }

  return result;
}

/*
===========================================
Approach:- In-place (Modify same array)
===========================================
*/

function prefixSumInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + (arr[i - 1] || 0);
  }

  return arr;
}

// Example
// let array = [1, 2, 3, 4];
// console.log(prefixSum(array));
// console.log(prefixSumInPlace([...array]));
/*
===========================================
Question:
Flatten a nested array.
===========================================
*/

function flattenArray(arr, result = []) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattenArray(item, result);
    } else {
      result.push(item);
    }
  }

  return result;
}

/*
===========================================
Approach: Recursive (Return new array)
===========================================
*/

function flattenArray2(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray2(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

// Example
let array = [1, [2, 3], [4, [5, 6]]];
// console.log(flattenArray(array));
// console.log(flattenArray2(array));

/*
===========================================
Question:
Group products by category.
===========================================
*/

function groupByCategory(arr) {
  let result = {};

  for (let product of arr) {
    if (!result[product.category]) {
      result[product.category] = [];
    }

    result[product.category].push(product);
  }

  return result;
}

// Example
const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
];

// console.log(groupByCategory(products));

/*
===========================================
Question:
Print all prime numbers from a given array.
===========================================
prime Numbers :-
      A prime number can be divided only by 1 and the same number
      It cannot be divided evenly by any other number
*/

// let result = [];
// let check = true;

function removePrime(array) {
  for (let num of array) {
    check = true;

    if (num < 2) break;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        check = false;
      }
    }

    if (check) result.push(num);
  }

  console.log(result);
}

// removePrime([3, 5, 2, 6, 7, 12]); // [3, 5, 2, 7]



/*
===========================================
Question:
Find the second largest number in a given array.
===========================================
*/

function secLarge(array) {
  let largest = 0;
  let second = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      second = largest;
      largest = array[i];
    } else {
      if (array[i] > second) {
        second = array[i];
      }
    }
  }

  console.log(second);
}

// secLarge([12, 5, 2, 6, 7, 2]); // 7


/*
===========================================
Question:
Remove duplicate even numbers from an array 
while keeping odd numbers unchanged.
===========================================
*/

function removeDupEven(array) {
  let unique = new Map();
  let result = [];

  for (let n of array) {
    if (n % 2 == 0) {
      if (!unique.has(n)) {
        unique.set(n, true);
        result.push(n);
      }
    } else {
      result.push(n);
    }
  }

  console.log(result);
}

// removeDupEven([2, 3, 4, 5, 2, 3, 4, 5, 3, 0]); 
// [2, 3, 4, 5, 3, 5, 3, 0]