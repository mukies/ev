const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    requirement: { type: String, required: true },
  },
  { timestamps: true }
);

const inquiryModel = mongoose.model("Inquiry", inquirySchema);

module.exports = inquiryModel;
