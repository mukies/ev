const {
  userLogin,
  userRegister,
  userChangePassword,
  logout,
} = require("../controllers/users.c");
const { userProtection } = require("../middlewares/userProtection");

const router = require("express").Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/logout", logout);

router.put("/change-password", userProtection, userChangePassword);

module.exports = router;
