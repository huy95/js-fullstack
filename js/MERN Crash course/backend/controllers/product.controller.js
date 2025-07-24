import mongoose from "mongoose";
import Product from "../model/product.model.js";

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error get" });
  }
};

const addProduct = async (req, res) => {
  const product = req.body;
  console.log("!@3123");

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error post" });
  }
};

const deleteProduct =  async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(404).json({ success: true, message: "Product not found delete" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product ID" });
  }
  try {
    const productUpdate = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res.status(200).json({ success: true, data: product });
  } catch (_) {
    return res
      .status(500)
      .json({ success: false, message: "server error put product" });
  }
};



export {
  getProduct,
  deleteProduct,
  updateProduct,
  addProduct
};