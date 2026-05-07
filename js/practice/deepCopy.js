/*
===========================================
Question:
Implement Deep Copy in JavaScript.
===========================================

Deep Copy:
- Creates completely independent copy
- Nested objects/arrays are also copied

Approaches:
- structuredClone()
- JSON methods
- Manual recursion
*/

/*
===========================================
Approach: Using structuredClone
===========================================
*/

const original = {
  name: "Safwan",
  marks: {
    math: 90,
    science: 80
  }
};

const arr = [1, 2, [3, 4], [5, [6, 7]]];

let objectCopy1 = structuredClone(original);
let arrayCopy1 = structuredClone(arr);

/*
===========================================
Approach: Using JSON methods
===========================================
*/

let objectCopy2 = JSON.parse(JSON.stringify(original));
let arrayCopy2 = JSON.parse(JSON.stringify(arr));

/*
===========================================
Approach: Manual Deep Copy For Object and Array
===========================================
*/

function deepCopy(item) {
  if (item === null || typeof item !== "object") {
    return item;
  }

  let copy = Array.isArray(item) ? [] : {};

  for (let key in item) {
    copy[key] = deepCopy(item[key]);
  }

  return copy;
}

let objectCopy3 = deepCopy(original);
let arrayCopy3 = deepCopy(arr);

/*
===========================================
Approach: Deep Copy for Array Only
===========================================
*/

function deepCopyArray(array) {
  let copy = [];

  for (let key in array) {
    if (Array.isArray(array[key])) {
      copy[key] = deepCopyArray(array[key]);
    } else {
      copy[key] = array[key];
    }
  }

  return copy;
}

// Example
let a1 = [2, 2, [3, 3]];
let a2 = deepCopyArray(a1);

a1.push(1);
a2.push(2);

console.log(a1);
console.log(a2);

/*
===========================================
Approach: Deep Copy for Object Only
===========================================
*/

function deepCopyObject(object) {
  let copy = {};

  for (let key in object) {
    if (
      typeof object[key] === "object" &&
      object[key] !== null
    ) {
      copy[key] = deepCopyObject(object[key]);
    } else {
      copy[key] = object[key];
    }
  }

  return copy;
}

// Example
let obj1 = {
  name: "Safwan",
  marks: {
    math: 90
  }
};

let obj2 = deepCopyObject(obj1);

obj2.marks.math = 100;

console.log(obj1);
console.log(obj2);