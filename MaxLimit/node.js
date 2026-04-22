const express = require("express");
const send = require("send");
const app = express()

app.get("/", (req, res) => {
    res.send("landing")
})

app.get("/params/:id", (req, res) => {
    let data = req.params.id;
    res.send(data);
})

app.get("/query", (req, res) => {
    let query = req.query.data;
    send(query)
})

app.listen(2000, ()=> {
    console.log(`https://localhost:2000`)
})