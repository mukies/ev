const {
  adminRegister,
  adminLogin,
  adminChangePassword,
} = require("../controllers/admin.c");
const { adminProtection } = require("../middlewares/adminProtection");

const router = require("express").Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);
router.put("/change-password", adminProtection, adminChangePassword);

module.exports = router;
