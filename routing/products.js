const express = require("express");
const productsController = require("../controllers/productsController");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.get("/", productsController.getProductsView);

router.get("/add", productsController.getAddProductView);

router.post("/add", productsController.addProduct);

router.get("/new", productsController.getNewProductView);

router.get("/:name", productsController.getProductView);

router.post("/:name/add-to-cart", cartController.addProductToCart);

router.delete("/:name", productsController.deleteProduct);

module.exports = router;
