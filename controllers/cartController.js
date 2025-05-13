const Product = require("../models/Product");
const cart = [];

exports.addProductToCart = (req, res) => {
  const { name } = req.params;
  const product = Product.findByName(name);

  if (product && !cart.find(p => p.name === product.name)) {
    cart.push(product); // aynı ürün birden fazla eklenmesin
  }

  res.redirect("/cart");
};

exports.getCartItems = () => cart;

exports.getProductsCount = () => cart.length;

exports.clearCart = () => {
  cart.length = 0;
};
