// importing path
const path = require("path");

// importing dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Importing admin routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// creating an express application & storing in a constant named app
const app = express();

// the below function registers a middleware
app.use(bodyParser.urlencoded({ extended: false }));
// extended:false enables it to parse non default features

// serving files statically
app.use(express.static(path.join(__dirname, "public")));

// order matters (in the order of how they're imported)
app.use("/admin", adminRoutes); //we can add this filter if all admin routes will start with /admin
app.use(shopRoutes);

// if none of the above routes are selected we add a default route for 404 page below
app.use((req, res, next) => {
  // res.status(404).send("<h1>Page not found. erroR 404</h1>");
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// use is a method which is defined by the express framework.
// use() allows us to add a new middleware function
// app.use((req, res, next) => {
//   console.log("first");
//   next();
// });
// next allows the request to continue to the next middleware in line

// app.use(path, callbacks or functions to be executed)
// any route that starts with the path will be displayed
// app.use("/", (req, res, next) => {
//   console.log("this always runs");
//   next();
// });

app.listen(8080);
