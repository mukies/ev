const jwt = require("jsonwebtoken");
const adminModel = require("../models/admin.m");

exports.adminProtection = async (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    const decode = jwt.verify(token, process.env.JWT_KEY);

    if (!decode) return res.json({ success: false, message: "Invalid token." });

    const admin = await adminModel.findById(decode.id).select("-password");
    if (!admin)
      return res.json({ success: false, message: "Admin not found." });

    req.admin = admin;
    next();
  } catch (error) {
    res.json({ success: false, message: "Middleware error." });
  }
};
