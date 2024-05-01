const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true, unique: true },
    slug: { type: String, required: true },
    productImage: { type: String, required: true, default: "" },
    category: { type: String, required: true, default: "homeuse-ev-charger" },
    shortDescription: { type: String, required: true },
    mainDescription: { type: String },
    descriptiveImage: { type: String, default: "" },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
