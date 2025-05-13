const Product = require("../models/Product");
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");
const cartController = require("./cartController");

exports.getProductsView = (req, res) => {
  const cartCount = cartController.getProductsCount();
  const products = Product.getAll();

  res.render("products.ejs", {
    headTitle: "Shop - Products",
    path: "/",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products,
    cartCount,
  });
};

exports.getAddProductView = (req, res) => {
  const cartCount = cartController.getProductsCount();

  res.render("add-product.ejs", {
    headTitle: "Shop - Add product",
    path: "/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
    cartCount,
  });
};

exports.addProduct = (req, res) => {
  const { name, description, price } = req.body;
  const imageUrl = getImageFor(name); // 🍓 Otomatik resim eşleştirme

  Product.add({ name, description, price, imageUrl });

  res.redirect("/products");
};

exports.getNewProductView = (req, res) => {
  const cartCount = cartController.getProductsCount();
  const newestProduct = Product.getLast();

  res.render("new-product.ejs", {
    headTitle: "Shop - New product",
    path: "/new",
    activeLinkPath: "/products/new",
    menuLinks: MENU_LINKS,
    newestProduct,
    cartCount,
  });
};

exports.getProductView = (req, res) => {
  const cartCount = cartController.getProductsCount();
  const name = req.params.name;
  const product = Product.findByName(name);

  if (!product) {
    return res.status(404).render("404", {
      headTitle: "404",
      menuLinks: MENU_LINKS,
      activeLinkPath: "",
      cartCount,
    });
  }

  res.render("product.ejs", {
    headTitle: `${product.name} - Details`,
    path: `/products/${name}`,
    activeLinkPath: `/products/${name}`,
    menuLinks: MENU_LINKS,
    product,
    cartCount,
  });
};

exports.deleteProduct = (req, res) => {
  const name = req.params.name;
  const found = Product.findByName(name);

  if (!found) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  Product.deleteByName(name);
  res.status(STATUS_CODE.OK).json({ success: true });
};

function getImageFor(name) {
  const lower = name.toLowerCase();

  if (lower.includes("apple") || lower.includes("jabłko")) {
    return "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg";
  }

  if (lower.includes("banana") || lower.includes("banan")) {
    return "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg";
  }

  if (lower.includes("strawberry") || lower.includes("truskawka")) {
    return "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg";
  }

  if (lower.includes("grape") || lower.includes("winogrono")) {
    return "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg";
  }

  if (lower.includes("kiwi")) { 
    return "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg";
  }

  return "https://hips.hearstapps.com/hmg-prod/images/fruit-salad-index-67c08a18a85e7.jpg";
}
