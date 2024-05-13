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
    await sendMail(name, email, location, phone, detail, res);
    const inquiry = new inquiryModel({
      name,
      email,
      location,
      phone,
      requirement: detail,
    });
    await inquiry.save();
    res.json({ success: true, message: "Inquiry submitted." });
  } catch (error) {
    res.json({ success: false, message: "Error while submitting inquiry." });
  }
};

exports.removeInquiry = async (req, res) => {
  try {
    await inquiryModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Inquiry deleted." });
  } catch (error) {
    res.json({ success: false, message: "Error while deleting inquiry." });
  }
};

exports.getInquiry = async (req, res) => {
  const page = req.query.page;
  try {
    const total = (await inquiryModel.find()).length;
    const inquiries = await inquiryModel
      .find()
      .sort({ createdAt: -1 })
      .limit(4 * page);
    res.json({ success: true, isMore: total > inquiries.length, inquiries });
  } catch (error) {
    res.json({ success: false, message: "Error while getting inquiries." });
  }
};
