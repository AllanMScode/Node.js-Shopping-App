// for the admin

const path = require("path");

const express = require("express");

// Importing products controller
const adminController = require("../controllers/admin");

const router = express.Router();

// products array for temporary use
// const products = [];

// /admin/add-product (actual route) => GET
router.get("/add-product", adminController.getAddProduct);

// we don't execute the above function (using getAddProduct()) but instead we store it (using getAddProduct, no parenthesis) so that when a request reaches this route, it should go ahead & execute it.

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product (actual route) => POST
router.post("/add-product", adminController.postAddProduct);

router.post("/edit-product/:productId", adminController.getEditProduct);

module.exports = router;

// exports.routes = router;
// exports.products = products;
