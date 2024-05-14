// for the admin

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// products array for temporary use
const products = [];

// /admin/add-product (actual route)
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "aDd pRoduct",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// /admin/add-product (actual route)
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;

exports.routes = router;
exports.products = products;
