const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRoutes");
// middlewares
app.use(express.json());

// routes
app.use("/", tourRouter);
// export app
module.exports = app;
