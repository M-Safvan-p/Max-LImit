// flatten array

function flatten(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flatten(array[i]));
        } else {
            result.push(array[i]);
        }
    }
    return result
}

console.log(flatten([1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]));

// flatten object 

function obFlatten(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        let newKey = parentKey ? parentKey + "." + key : key;
        if (typeof obj[key] === "object" && obj[key] !== null) {
            obFlatten(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key]
        }
    }
    return result
}
const data = {
    a: 1,
    b: {
        c: 2,
        d: {
            f: 3,
            g: 7,
        },
        e:4
    }
};
console.log(obFlatten(data));