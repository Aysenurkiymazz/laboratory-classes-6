const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const { MENU_LINKS } = require("../constants/navigation");

router.get("/", (req, res) => {
  const items = cartController.getCartItems();
  const cartCount = cartController.getProductsCount();

  res.render("cart.ejs", {
    headTitle: "Your Cart",
    activeLinkPath: "/cart",
    menuLinks: MENU_LINKS,
    items,
    cartCount
  });
});

// ✅ SEPETİ TEMİZLE
router.post("/clear", (req, res) => {
  cartController.clearCart();
  res.redirect("/cart");
});

module.exports = router;



