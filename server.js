const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app");
const port = process.env.PORT;

// DATABASE CONNECTION
const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => console.log("DB connection successfull"));

app.get("/", (req, res) => {
  res.send("hello welcome");
});

app.listen(port, () => {
  console.log("server is running");
});
