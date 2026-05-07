/*
===========================================
Question:
Flatten a nested array using recursion.
===========================================

Flatten Array:
- Convert nested array into single array
- Remove all levels of nesting
*/

function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(...flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

// Example
console.log(flatten([1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]));

/*
===========================================
Question:
Flatten a nested object using recursion.
===========================================

Flatten Object:
- Convert nested object into single level object
- Nested keys become dot notation
*/

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    let newKey = parentKey ? parentKey + "." + key : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

// Example
const data = {
  a: 1,
  b: {
    c: 2,
    d: {
      f: 3,
      g: 7,
    },
    e: 4,
  },
};

console.log(flattenObject(data));
