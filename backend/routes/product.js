const {
  getAll,
  getOne,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.c");
const { adminProtection } = require("../middlewares/adminProtection");

const router = require("express").Router();

router.get("/product-list", getAll);
router.get("/product-details", getOne);

//admin
router.post("/add-product", adminProtection, addProduct);
router.put("/update-product/:id", adminProtection, updateProduct);
router.delete("delete-product/:id", adminProtection, deleteProduct);

module.exports = router;