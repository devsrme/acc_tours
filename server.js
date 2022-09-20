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

// NODE_ENV=development
// DATABASE= mongodb+srv://adminsr:4VfrjC3lQAIv9ptx@cluster0.igq8i.mongodb.net/acc_tours?retryWrites=true&w=majority
// ATLAS_URI_USERNAME=adminsr
// ATLAS_URI_PASSWORD=4VfrjC3lQAIv9ptx
// PORT = 5000
