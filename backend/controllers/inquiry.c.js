const inquiryModel = require("../models/inquiry.m");
const { sendMail } = require("../utils/nodeMailer");

exports.addInquiry = async (req, res) => {
  const { name, email, location, phone, detail } = req.body;

  if (!name || !email || !location || !phone || !detail)
    return res.json({
      success: false,
      message: "Fill the inquiry form properly.",
    });

  try {
    const inquiry = new inquiryModel({
      name,
      email,
      location,
      phone,
      requirement: detail,
    });
    await sendMail(name, email, location, phone, detail, res);
    await inquiry.save();
    res.json({ success: true, message: "Inquiry submitted." });
  } catch (error) {
    res.json({ success: false, message: "Error while submitting inquiry." });
  }
};

exports.test = async (req, res) => {
  await sendMail("mukesh", "mukesh", "mukesh", "mukesh", "mukesh", res);
  res.json({ status: "ok" });
};

exports.removeInquiry = async (req, res) => {
  try {
    await inquiryModel.findByIdAndDelete(req.param.id);
    res.json({ success: true, message: "Inquiry deleted." });
  } catch (error) {
    res.json({ success: false, message: "Error while deleting inquiry." });
  }
};

exports.getInquiry = async (req, res) => {
  try {
    const inquiries = await inquiryModel.find().sort({ createdAt: -1 });
    res.json({ success: true, inquiries });
  } catch (error) {
    res.json({ success: false, message: "Error while getting inquiries." });
  }
};
