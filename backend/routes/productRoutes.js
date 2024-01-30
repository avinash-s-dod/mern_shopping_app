const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

//@description Get All products from db
// @route GET /api/products
// @access Public
router.get("/", getAllProducts);

//@description Get All products by ID from db
// @route GET /api/products/:id
// @access Public
router.get("/:id", getProductById);

module.exports = router;
