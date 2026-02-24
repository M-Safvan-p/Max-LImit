const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Enter two numbers on path parameter");
});

app.get("/divide/:a/:b", (req, res) => {
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        throw new Error("invalid number");
    }

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    res.send(`Result: ${a / b}`);
});

app.use(errorhandler);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

function errorhandler(err, req, res, next) {
    console.log("Error:", err.message);
    res.status(400).send(err.message);
}
