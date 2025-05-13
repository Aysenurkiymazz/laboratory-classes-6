const products = [];

module.exports = class Product {
  static getAll() {
    return products;
  }

  static getLast() {
    return products[products.length - 1];
  }

  static findByName(name) {
    return products.find((p) => p.name.toLowerCase() === name.toLowerCase());
  }  

  static deleteByName(name) {
    const index = products.findIndex(p => p.name === name);
    if (index !== -1) {
      products.splice(index, 1);
    }
  }

  static add(product) {
    products.push(product);
  }
};
