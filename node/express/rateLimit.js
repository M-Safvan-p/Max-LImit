const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();
const port = 3000;

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message:"Too many requests, please try later"
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello Safwan 🚀");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});