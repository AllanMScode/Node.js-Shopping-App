// importing path
const path = require("path");

// importing dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Importing admin routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// creating an express application & storing in a constant named app
const app = express();

// setting the global configuration value
// app.set() allows us to set any values globally on our application

// we use the 'view engine' property for spicifying the template engine
app.set("view engine", "ejs");

// we use the 'views' property to specify where to find the folder with ejs files(in this case, it's the views folder)
app.set("views", "views");

// the below function registers a middleware
app.use(bodyParser.urlencoded({ extended: false }));
// extended:false enables it to parse non default features

// serving files statically
app.use(express.static(path.join(__dirname, "public")));

// order matters (in the order of how they're imported)
app.use("/admin", adminData.routes); //we can add this filter if all admin routes will start with /admin
app.use(shopRoutes);

// if none of the above routes are selected we add a default route for 404 page below
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "PagE nOt foUNd" });
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
