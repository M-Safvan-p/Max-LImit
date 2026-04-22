/*
===========================================
Question:
Reverse an array manually without using array and reverse
===========================================
*/

function reverseArray() {
  const arr = [3, 5, 3, 1];

  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }

  console.log(arr);
}

reverseArray(); // [1,3,5,3]

/*
===========================================
Question:
Check if an array is a palindrome.
===========================================
*/

function isPalindrome(arr) {
  let rev = structuredClone(arr);
  rev.reverse();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== rev[i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome([1,2,1])); // true


/*
===========================================
Question:
Perform Binary Search using recursion.
===========================================
*/

function binarySearch(arr, key) {
  function recursive(left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) return mid;

    if (arr[mid] < key) {
      return recursive(mid + 1, right);
    } else {
      return recursive(left, mid - 1);
    }
  }

  return recursive();
}

console.log(binarySearch([1,3,5,6,7], 6)); // 3


/*
===========================================
Question:
Find sum of argument.
===========================================
*/

function sumNumbers(...numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  console.log(sum);
}

sumNumbers(1,2,3,4,5); // 15


/*
===========================================
Question:
Demonstrate closure with a counter.
===========================================
*/

function outer() {
  let count = 1;

  return function () {
    console.log(count++);
  };
}

let counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

/*
===========================================
Question:
Print numbers from 1 to n using setTimeout.
===========================================
*/

function printWithDelay(n) {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

printWithDelay(5); 
// 1 2 3 4 5 (with 1 second gap)

/*
===========================================
Question:
Find first non-repeating character in a string.
===========================================
*/

function firstNonRepeating(str) {
  for (let i = 0; i < str.length; i++) {
    let check = true;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        check = false;
        break;
      }
    }

    if (check) return str[i];
  }
}

console.log(firstNonRepeating("aaabbaceedff")); // b