const fs = require("fs");

fs.writeFile("text.txt","sample data", () => {
    console.log("done");
})