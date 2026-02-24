function* generator(){
    console.log("start");
    yield "hellow";
    console.log("2 started");
    yield "how are you";
    console.log("last one");
    yield "fine"
    console.log("End!!!!")
}

let start = generator()
console.log(start.next().value)
console.log(start.next().value)
console.log(start.next().value)
start.next()
