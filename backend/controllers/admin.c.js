const adminModel = require("../models/admin.m");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/getToken");

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.json({
      success: false,
      message: "Email and Password is required.",
    });

  try {
    const isRegistered = await adminModel.findOne({ email });

    if (!isRegistered)
      return res.json({ success: false, message: "Invalid Credentials." });

    const isMatch = await bcrypt.compare(password, isRegistered.password);

    if (!isMatch)
      return res.json({ success: false, message: "Invalid Credentials." });

    const token = getToken(isRegistered._id, res);

    res.json({
      success: true,
      message: "Login successfull.",
      id: isRegistered._id,
    });
  } catch (error) {
    res.json({ success: false, message: "error on admin login", error });
  }
};

exports.adminRegister = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password)
    return res.json({ success: false, message: "Required field is empty." });

  try {
    const isAdminExist = await adminModel.find();
    if (isAdminExist.length)
      return res.json({ success: false, message: "Admin already registered." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = new adminModel({ email, fullName, password: hashedPassword });
    await data.save();

    res.json({
      success: true,
      message: "Admin account registerd successfully.",
    });
  } catch (error) {
    console.log("first", error);
    res.json({
      success: false,
      message: "Error while registering admin account",
      error,
    });
  }
};

exports.adminChangePassword = async (req, res) => {
  const { oldPass, newPass } = req.body;

  if (!oldPass || !newPass)
    return res.json({
      success: false,
      message: "Please provide required data.",
    });

  try {
    const admin = await adminModel.findById(req.admin._id);

    if (!admin)
      return res.json({ success: false, message: "Admin not found." });

    // check old password

    const isMatch = await bcrypt.compare(oldPass, admin.password);

    if (!isMatch)
      return res.json({ success: false, message: "Incorrect password." });

    //hash the new password
    const hashedPass = await bcrypt.hash(newPass, 10);
    admin.password = hashedPass;
    await admin.save();

    res.json({ success: true, message: "Password has been changed." });
  } catch (error) {
    console.log("first", error);
    res.json({ success: false, message: "Error while changing password." });
  }
};

exports.logout = async (req, res) => {
  res
    .cookie("jwt", "", { maxAge: 0 })
    .json({ success: true, message: "logout successfull." });
};

exports.checkAdminExist = async (req, res) => {
  try {
    const isRegistered = await adminModel.find();

    if (isRegistered.length) {
      res.json({ success: true, adminExist: true });
    } else {
      res.json({ success: true, adminExist: false });
    }
  } catch (error) {
    res.json({ success: false, message: "Error while checking admin." });
  }
};
