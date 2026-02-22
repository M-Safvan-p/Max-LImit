const http = require("http");

http.createServer((req, res) => {
    const { url, method } = req;

    if(url === "/" && method === "GET"){
        res.end("Landing page");
    }else if(url === "/home" && method === "GET"){
        res.end("Home Page")
    }else{
        res.end("page not found")
    }
}).listen(4000,() => {
    console.log(`server running on: http://localhost:4000`);
});
