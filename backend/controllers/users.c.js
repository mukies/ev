const userModel = require("../models/users.m");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/getToken");

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

    res.json({ success: true, message: "Login successfull.", token });
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
