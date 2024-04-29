const jwt = require("jsonwebtoken");

exports.getToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_KEY);

  if (!token)
    return res.json({
      success: false,
      message: "Error while generating token.",
    });

  res.cookie("jwt", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    sameSite: true,
  });

  return token;
};
