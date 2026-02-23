const express = require("express");
const app = express();



app.get("/", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Enter valid number");
    }

    res.send(`Sum is: ${a + b}`);
});
app.listen(2000, () => {
    console.log(`http://localhost:2000`)
})