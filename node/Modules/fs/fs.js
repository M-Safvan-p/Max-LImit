const fs = require("fs");

// Write Date as a string in new file using fs

const date = new Date().toString();

fs.writeFile("Date.txt", date, (err) => {
  if (err) throw err;
  console.log("file created or over writed");
});

function delay() {
  setTimeout(() => {
    fs.appendFile("Date.txt", "\n Hellow from append", (err) => {
      if (err) throw err;
      console.log("file appended");
    });
  }, 1000);
}
delay();

function readDelay() {
  setTimeout(() => {
    fs.readFile("Date.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("Readed data:", data);
    });
  }, 2000);
}
readDelay();
