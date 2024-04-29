const productModel = require("../models/product.m");
const slugify = require("slugify");
const { v2: cloudinery } = require("cloudinary");

exports.addProduct = async (req, res) => {
  const { productName, category, shortDescription, mainDescription } = req.body;
  let { productImage, descriptiveImage } = req.body;

  if (
    !productName ||
    !category ||
    !shortDescription ||
    !mainDescription ||
    !productImage
  )
    return res.json({
      success: false,
      message: "Please provide all required information.",
    });

  try {
    const slug = slugify(productName.toLowerCase(), "-");

    const isExist = await productModel.find({ slug });

    if (isExist.length)
      return res.json({
        success: false,
        message: "Product name already exist.",
      });

    const res = await cloudinery.uploader.upload(productImage);
    productImage = res.secure_url;

    if (descriptiveImage) {
      const response = await cloudinery.uploader.upload(descriptiveImage);
      descriptiveImage = response.secure_url;
    }

    const product = new productModel({
      productImage,
      category,
      productName,
      shortDescription,
      mainDescription,
      descriptiveImage,
    });
    await product.save();
    res.json({ success: true, message: "Product added successfully." });
  } catch (error) {
    res.json({ success: false, message: "Error while adding a product." });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await productModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Product deleted successfully." });
  } catch (error) {
    res.json({ success: false, message: "Error while deleting the product." });
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, message: "Error while fetching products." });
  }
};

exports.getOne = async (req, res) => {
  const { slug } = req.params;
  try {
    const product = await productModel.findOne({ slug });

    if (!product)
      return res.json({ success: false, message: "Product not found." });

    res.json({ success: true, message: "Product found", product });
  } catch (error) {
    res.json({
      success: false,
      message: "Error while fetching product details.",
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { productName, category, shortDescription, mainDescription } = req.body;
  let { productImage, descriptiveImage } = req.body;
  const { id } = req.params;
  if (
    !productName ||
    !category ||
    !shortDescription ||
    !mainDescription ||
    !productImage
  ) {
    return res.json({
      success: false,
      message: "Please provide all required information.",
    });
  }

  try {
    const slug = slugify(productName.toLowerCase(), "-");

    if (productImage.length && !productImage.startsWith("http")) {
      //do something

      const res = await cloudinery.uploader.upload(productImage);
      productImage = res.secure_url;
    }

    if (descriptiveImage.length && !descriptiveImage.startsWith("http")) {
      //do something
      const res = await cloudinery.uploader.upload(descriptiveImage);
      descriptiveImage = res.secure_url;
    }

    const product = await productModel.findByIdAndUpdate(id, {
      productName,
      productImage,
      category,
      shortDescription,
      mainDescription,
      descriptiveImage,
      slug,
    });
    await product.save();

    res.json({ success: true, message: "Product details has been updated." });
  } catch (error) {
    res.json({
      success: false,
      message: "Error while updating product details.",
    });
  }
};
