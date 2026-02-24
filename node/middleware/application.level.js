const express = require("express");
const app = express();
const port = 3000;

app.use(logMiddleware)

app.get("/", (req, res) => {
  res.send("Hello from landing page");
});

app.get("/home", (req, res) => {
  res.send("Hello from home page");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

function logMiddleware(req,res,next){
    let now = new Date()
    console.log(req.method, req.url, now.toTimeString());
    next()
    // if(req.ip == "192.168.1.10"){
    //     return res.send("access denied");
    // }
    // next();
}