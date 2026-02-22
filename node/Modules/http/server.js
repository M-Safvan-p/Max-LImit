const http = require("http");

http.createServer((req, res) => {
    res.write("hi");
    res.end()
}).listen(3000,()=> {
    console.log("http://localhost:3000");
});
