const {
  userLogin,
  userRegister,
  userChangePassword,
  logout,
  getUsers,
  getSingleUser,
  contactMail,
} = require("../controllers/users.c");
const { adminProtection } = require("../middlewares/adminProtection");
const { userProtection } = require("../middlewares/userProtection");

const router = require("express").Router();

router.get("/get-single-user/:id", adminProtection, getSingleUser);
router.get("/get-users", adminProtection, getUsers);
router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/logout", logout);

router.post("/contact-message", contactMail);

router.put("/change-password", userProtection, userChangePassword);

module.exports = router;
