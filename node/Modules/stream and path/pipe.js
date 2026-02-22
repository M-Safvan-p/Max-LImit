// const fs = require('fs');
// const path = require('path');

// const reader = fs.createReadStream(path.join(__dirname, 'bigfile.txt'));
// const writer = fs.createWriteStream(path.join(__dirname, 'copy.txt'));

// reader.pipe(writer);


// Above is original way
// with path module to get in same folder


const fs = require('fs');
const path = require('path');

const reader = fs.createReadStream(path.join(__dirname, 'bigfile.txt'));
const writer = fs.createWriteStream(path.join(__dirname, 'copy.txt'));
console.log(__dirname)

reader.pipe(writer);
