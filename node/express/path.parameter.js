const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Enter student id on path with id")
});

app.get("/:id", (req, res) => {
    let id = req.params.id;
    if(isNaN(id)){
        return res.send("Enter valid id");
    }
    res.send(`student id is ${id}`);
})

app.listen(2000, () => {
    console.log(`http://localhost:2000`)
})