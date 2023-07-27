const product = require("../models/product");
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ name: "vase table" });
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  // Destructure to prevent any unwanted query params
  const { featured } = rq.query;
  // Create new object
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  console.log(queryObject);
  const products = await Product.find(req.query);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
