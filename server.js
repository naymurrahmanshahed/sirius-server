require("dotenv").config();
const express = require("express");

const app = express();

// respond with "hello ExpressJS" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.json({ message: "Hello ExpressJS" });
});

// port
const PORT = process.env.PORT || 8000;

// listening
app.listen(PORT, () => {
  console.log(`litening port ${PORT}`);
});
