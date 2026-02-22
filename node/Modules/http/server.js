const http = require("http");
const port = 3000;

const server = http.createServer((req,res)=> {
    res.write("hi");
    res.end();
});

server.listen(port, ()=> {
    console.log(`Server running on: http:localhost:${port}`);
})