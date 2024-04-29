const jwt = require("jsonwebtoken");
const userModel = require("../models/users.m");

exports.userProtection = async (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    const decode = jwt.verify(token, process.env.JWT_KEY);

    if (!decode) return res.json({ success: false, message: "Invalid token." });

    const user = await userModel.findById(decode.id).select("-password");
    if (!user) return res.json({ success: false, message: "user not found." });

    req.user = user;
    next();
  } catch (error) {
    res.json({ success: false, message: "Middleware error." });
  }
};
