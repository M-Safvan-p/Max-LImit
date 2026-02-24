// function borrowing is one object uses a function that belongs to another object
// we do this using call() , apply() , bind()
const person1 = {
    name: "safvan",
    greet:function (place){
        console.log(`Hi I'm ${this.name} from ${place}`);
    }
}

const person2 = {
    name: "Rashid"
}

// call() 

person1.greet.call(person2, "Malappuram");

// apply () - this is also same like call but argument pass as an array

person1.greet.call(person2, ["Kozhikode"]);
// person1.greet.call(person2, ["Kozhikode","Malappuram"]);

// bind() above two excute immediately  but bind return a function that we can use when ever we needed

let result = person1.greet.bind(person2, "Kannur");// return function
result()// this time only this execute