const express = require("express");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const cors = require("cors");
const utilHelpers = require("./helpers/utils.helper");
const mongoose = require("mongoose");
require("./models/ItemBundle");
require("./models/Ticket");

const app = express();

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected.");
  })
  .catch((err) => console.log(err.message));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//Create default route to indexRouter
app.use("/api", indexRouter);

// catch 404 and forard to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.statusCode = 404;
  next(err);
});

/* Initialize Error Handling */
app.use((err, req, res, next) => {
  console.log("ERROR", err.message);
  return utilHelpers.sendResponse(
    res,
    err.statusCode ? err.statusCode : 500,
    false,
    null,
    [{ message: err.message }],
    null
  );
});
module.exports = app;
