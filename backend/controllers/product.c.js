const productModel = require("../models/product.m");
const slugify = require("slugify");
const { v2: cloudinery } = require("cloudinary");

exports.addProduct = async (req, res) => {
  const { productName, category, shortDescription, mainDescription } = req.body;
  let { productImage, descriptiveImage } = req.body;

  if (!productName || !category || !shortDescription || !productImage)
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

    const resp = await cloudinery.uploader.upload(productImage);
    productImage = resp.secure_url;

    if (descriptiveImage) {
      const response = await cloudinery.uploader.upload(descriptiveImage);
      descriptiveImage = response.secure_url;
    }

    const product = new productModel({
      productImage,
      category,
      slug,
      productName,
      shortDescription,
      mainDescription,
      descriptiveImage,
    });
    await product.save();
    res.json({ success: true, message: "Product added successfully." });
  } catch (error) {
    console.log("error", error);
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
    const products = await productModel.find().sort({ createdAt: -1 });
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
  if (!productName || !category || !shortDescription || !productImage) {
    return res.json({
      success: false,
      message: "Please provide all required information.",
    });
  }

  try {
    const product = await productModel.findOne({ slug: id });
    const slug = slugify(productName.toLowerCase(), "-");

    if (productImage?.length && !productImage?.startsWith("http")) {
      //do something

      const resp = await cloudinery.uploader.upload(productImage);
      productImage = resp.secure_url;
    }

    if (descriptiveImage?.length && !descriptiveImage?.startsWith("http")) {
      //do something
      const res = await cloudinery.uploader.upload(descriptiveImage);
      descriptiveImage = res.secure_url;
    }

    const productUpdate = await productModel.findByIdAndUpdate(product._id, {
      productName,
      productImage,
      category,
      shortDescription,
      mainDescription,
      descriptiveImage,
      slug,
    });
    await productUpdate.save();

    res.json({ success: true, message: "Product details has been updated." });
  } catch (error) {
    res.json({
      success: false,
      message: "Error while updating product details.",
    });
  }
};

exports.getCategoryWise = async (req, res) => {
  const { slug } = req.params;
  try {
    const products = await productModel
      .find({ category: slug })
      .sort({ createdAt: -1 });

    res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, messge: "Error while getting product list." });
  }
};

exports.searchProduct = async (req, res) => {
  const { key } = req.params;
  try {
    const products = await productModel.find({
      $or: [{ name: { $regex: key } }, { slug: { $regex: key } }],
    });

    res.json({ success: true, products });
  } catch (error) {
    res.json({ success: false, message: "Error while product search." });
  }
};
