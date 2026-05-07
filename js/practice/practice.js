/*
===========================================
Question:
Print numbers from 1 to 10 with 1 second delay.
===========================================
/*
===========================================
Approach: Using setInterval
===========================================
*/

let count = 1;

let interval = setInterval(() => {
  console.log(count);
  count++;

  if (count === 11) {
    clearInterval(interval);
  }
}, 1000);

/*
===========================================
Approach: Using setTimeout
===========================================
*/

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

/*
===========================================
Approach: Using Recursion
===========================================
*/

function recursive(num) {
  if (num > 10) return null;

  console.log(num);

  setTimeout(() => {
    recursive(num + 1);
  }, 1000);
}

// Example
recursive(1);

/*
===========================================
Approach: Using Generator
===========================================
*/

function* generator() {
  for (let i = 1; i <= 10; i++) {
    yield i;
  }
}

let runner = generator();

let interval = setInterval(()=> {
    let result = runner.next();
    
    if(result.done){
        clearInterval(interval);
    }else{
        console.log(result.value)
    }
},1000)

/*
===========================================
Question:
Check if a number is prime.
===========================================

Prime Number:
- A number greater than 1
- Divisible only by 1 and itself
*/

function checkPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

/*
===========================================
Approach:
Optimized Prime Check
===========================================

Optimization:
- Check only up to √n
*/

function checkPrimeOptimized(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Example
console.log(checkPrime(8));
console.log(checkPrimeOptimized(11));