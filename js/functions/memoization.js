// witout memoization

function squareWithOutMemo(n) {
    console.log("Calculating...");
    return n * n;
}

// console.log(squareWithOutMemo(4));
// console.log(squareWithOutMemo(4));
// console.log(squareWithOutMemo(4));

// memoization - simple way
let memo = {};
function memoization(n) {
    if (memo[n]) {
        return memo[n];
    }
    console.log("calculating");
    memo[n] = n * n;
    return n * n;
}

// console.log(memoization(5));
// console.log(memoization(5));
// console.log(memoization(5));
// console.log(memoization(6));
// console.log(memoization(6));

// memoization - witout global variable (best version)
function memoSquare() {
    let memo = {};
    
    return function (n) {
        if (memo[n]) {
            return memo[n];
        }
        console.log("calculating");
        memo[n] = n * n;
        return memo[n];
    };
}
let square = memoSquare()// important because we are calculating in inner function outer function we used to store memo
console.log(square(5))
console.log(square(5))
console.log(square(6))
console.log(square(6))
console.log(square(6))


// 
function memo(fn){
    let cache = new Map()
    return function(...args){
        let key = JSON.stringify(args)
        if(cache.has(key)){
            return cache.get(key)
        }
        let result = fn(...args)
        cache.set(key,result)
        return result
    }
}


function add(a,b){
    return a+b
}

const memoAdd = memo(add)

log(memoAdd(1,2))
log(memoAdd(1,2))