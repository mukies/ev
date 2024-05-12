const {
  addInquiry,
  removeInquiry,
  getInquiry,
  test,
} = require("../controllers/inquiry.c");
const { adminProtection } = require("../middlewares/adminProtection");

const router = require("express").Router();

router.get("/test", test);
router.post("/add-inquiry", addInquiry);
router.post("/get-inquiry", adminProtection, getInquiry);
router.delete("/remove-inquiry/:id", adminProtection, removeInquiry);

module.exports = router;
