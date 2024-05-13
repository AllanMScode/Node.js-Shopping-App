// importing dependencies
const express = require("express");
const bodyParser = require("body-parser");

// creating an express application & storing in a constant named app
const app = express();

// the below function registers a middleware
app.use(bodyParser.urlencoded({ extended: false }));
// extended:false enables it to parse non default features

// use is a method which is defined by the express framework.
// use() allows us to add a new middleware function
// app.use((req, res, next) => {
//   console.log("first");
//   next();
// });
// next allows the request to continue to the next middleware in line

// app.use(path, callbacks or functions to be executed)
// any route that starts with the path will be displayed
app.use("/", (req, res, next) => {
  console.log("this always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send("<h1></h1>product pagex</h1>");
});

app.post("/product", (req, res, next) => {
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1></h1>hello worldl</h1>");
});

app.listen(8080);
