function Person(name, age){
    this.name = name;
    this.age = age
    this.greet = ()=> console.log(`welocme ${this.name}`);
}

let safvan = new Person("safvan", 18);
safvan.greet();
let shahul = new Person("shaul", 19);
shahul.greet();

// After the es6 uses classes insted constructor function

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = ()=> console.log(`welocme ${this.name}`);
  }
}

const p1 = new Person("Munnas", 19);
p1.greet()