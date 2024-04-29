const {
  adminRegister,
  adminLogin,
  adminChangePassword,
  logout,
  checkAdminExist,
} = require("../controllers/admin.c");
const { adminProtection } = require("../middlewares/adminProtection");

const router = require("express").Router();

router.get("/adminCheck", checkAdminExist);
router.post("/register", adminRegister);
router.post("/login", adminLogin);
router.post("/logout", logout);
router.put("/change-password", adminProtection, adminChangePassword);

module.exports = router;
