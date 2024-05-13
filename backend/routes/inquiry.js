const {
  addInquiry,
  removeInquiry,
  getInquiry,
  test,
} = require("../controllers/inquiry.c");
const { adminProtection } = require("../middlewares/adminProtection");

const router = require("express").Router();

router.post("/add-inquiry", addInquiry);
router.get("/get-inquiry", adminProtection, getInquiry);
router.delete("/remove-inquiry/:id", adminProtection, removeInquiry);
router.get("/test", (req, res) => {
  res.json({ success: true, data: req.query.name });
});
module.exports = router;
