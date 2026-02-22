const eventEmitter = require("events");
const myEmitter = new eventEmitter();

myEmitter.on("click", ()=> {
    console.log("button cliked");
});

myEmitter.emit("click");