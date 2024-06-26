const userModel = require("../models/users.m");
const adminModel = require("../models/admin.m");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/getToken");
const { sendContactMail } = require("../utils/contactMail");

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.json({
      success: false,
      message: "Email and Password is required.",
    });

  try {
    const isRegistered = await userModel.findOne({ email });

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
    res.json({ success: false, message: "Error on user login", error });
  }
};

exports.userRegister = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password)
    return res.json({ success: false, message: "Required field is empty." });

  try {
    const isuserExist = await userModel.find({ email });
    if (isuserExist.length)
      return res.json({ success: false, message: "Email already exist." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = new userModel({ email, fullName, password: hashedPassword });
    await data.save();

    res.json({
      success: true,
      message: "Account register successfully.",
    });
  } catch (error) {
    console.log("first", error);
    res.json({
      success: false,
      message: "Error while registering user account",
      error,
    });
  }
};

exports.userChangePassword = async (req, res) => {
  const { oldPass, newPass } = req.body;

  if (!oldPass || !newPass)
    return res.json({
      success: false,
      message: "Please provide required data.",
    });

  try {
    const user = await userModel.findById(req.user._id);

    if (!user) return res.json({ success: false, message: "User not found." });

    // check old password

    const isMatch = await bcrypt.compare(oldPass, user.password);

    if (!isMatch)
      return res.json({ success: false, message: "Incorrect Credentials." });

    //hash the new password
    const hashedPass = await bcrypt.hash(newPass, 10);
    user.password = hashedPass;
    await user.save();

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

exports.getUsers = async (req, res) => {
  try {
    const total = (await userModel.find()).length;
    const users = await userModel
      .find()
      .select("-password")
      .sort({ createdAt: -1 })
      .limit(5 * req.query.page);

    res.json({ success: true, users, isMore: total > users.length });
  } catch (error) {
    res.json({ success: false, message: "Error while getting users list." });
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const admin = await adminModel.findById(req.params.id).select("fullName");

    res.json({ success: true, admin });
  } catch (error) {
    res.json({ success: false, message: "Error while fetching user details" });
  }
};

exports.contactMail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.json({
      success: false,
      message: "Plese fill the form properly.",
    });

  try {
    await sendContactMail(name, email, message, res);

    res.json({ success: true, message: "Message submitted." });
  } catch (error) {
    res.json({ success: false, message: "Error while submitting message." });
  }
};
