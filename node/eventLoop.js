const fs = require('fs');

console.log('1. Script start (Synchronous)');

setTimeout(() => console.log('2. setTimeout 1 (Timers phase)'), 0);

setImmediate(() => console.log('3. setImmediate 1 (Check phase)'));

process.nextTick(() => console.log('4. nextTick 1 (Microtask - runs before loop/phases)'));

Promise.resolve().then(() => console.log('5. Promise 1 (Microtask - runs after nextTick)'));

fs.readFile(__filename, () => {
    console.log('6. fs.readFile callback (Poll phase)');
    
    setTimeout(() => console.log('7. setTimeout 2 (Timers phase)'), 0);
    
    setImmediate(() => console.log('8. setImmediate 2 (Check phase)'));
    
    process.nextTick(() => console.log('9. nextTick 2 (Microtask - runs immediately after Poll)'));
});

console.log('10. Script end (Synchronous)');
/*

console.log('1. Script start (Synchronous)');
console.log('10. Script end (Synchronous)');
process.nextTick(() => console.log('4. nextTick 1 (Microtask - runs before loop/phases)'));
Promise.resolve().then(() => console.log('5. Promise 1 (Microtask - runs after nextTick)'));
setTimeout(() => console.log('2. setTimeout 1 (Timers phase)'), 0);
setImmediate(() => console.log('3. setImmediate 1 (Check phase)'));
console.log('6. fs.readFile callback (Poll phase)');
process.nextTick(() => console.log('9. nextTick 2 (Microtask - runs immediately after Poll)'));
setImmediate(() => console.log('8. setImmediate 2 (Check phase)'));
setTimeout(() => console.log('7. setTimeout 2 (Timers phase)'), 0);

*/