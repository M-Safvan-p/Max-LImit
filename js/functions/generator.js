/*
===========================================
Question:
Understand execution flow of a generator function.
===========================================
*/

function* generator() {
  console.log("start");
  yield "hello";

  console.log("2 started");
  yield "how are you";

  console.log("last one");
  yield "fine";

  console.log("End!!!!");
}

// Example
// let gen = generator();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// gen.next();


/*
===========================================
Question:
Generate numbers from 1 to n using a generator.
===========================================
*/

function* generateNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
    yield
  }
}

// Example
// let gen = generateNumbers(3);
// gen.next();
// gen.next();
// gen.next();


function* generateNumbers2(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

// Example
// let gen2 = generateNumbers2(5);
// console.log(gen2.next().value);
// console.log(gen2.next().value);
// console.log(gen2.next().value);