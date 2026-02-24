// deep copy

const original = {
    name: "Safwan",
    marks: {
        math: 90,
        science: 80
    }
};
const arr = [1, 2, [3, 4], [5, [6, 7]]]

// using structed clone
let obCopy1 = structuredClone(original);
let arrCopy1 = structuredClone(arr);

// using jsom merthod 
let obCopy2 = JSON.parse(JSON.stringify(original));
let arrCopy2 = JSON.parse(JSON.stringify(arr));

// manually logic
function deepCopy(item){
    if(item === null || typeof item !== "object"){
        return item;
    }

    let copy = Array.isArray(item) ? [] : {}; // if array choose array if obj choose obj

    for(let key in item){ // for in loop - if object it give keys if array it give index
        copy[key] = deepCopy(item[key])
    }

    return copy;
}

let obCopy3 = deepCopy(original);
let arrCopy3 = deepCopy(arr);