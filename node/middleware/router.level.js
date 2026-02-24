const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from landing page");
});

app.get("/home", checkAuthentication, (req, res) => {
  res.send("Hello from home page");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

function checkAuthentication(req, res, next) {
  let token = req.query.token;
  if (token !== "123") {
    return res.redirect("/");
  }
  next();
}
