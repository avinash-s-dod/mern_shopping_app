const Products = require("../models/Products");

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    return res.status(200).send({
      success: true,
      message: "Products fetched successfully",
      products: products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(200).send({
        success: false,
        message: "Id is required!",
      });
    }
    const product = await Products.findOne({ _id: id });
    if (product) {
      return res.status(200).send({
        success: true,
        message: "Product fetched successfully",
        products: product,
      });
    } else {
      return res.status(200).send({
        success: false,
        message: "Please enter valid id",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
