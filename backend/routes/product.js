const {
  getAll,
  getOne,
  addProduct,
  updateProduct,
  deleteProduct,
  getCategoryWise,
  searchProduct,
  searchProductAdmin,
} = require("../controllers/product.c");
const { adminProtection } = require("../middlewares/adminProtection");

const router = require("express").Router();

router.get("/product-list", getAll);
router.get("/product-list-with-category/:slug", getCategoryWise);
router.get("/product-details/:slug", getOne);
router.get("/product-search/:key", searchProduct);

//admin
router.get("/product-search-admin/:key", adminProtection, searchProductAdmin);
router.post("/add-product", adminProtection, addProduct);
router.put("/update-product/:id", adminProtection, updateProduct);
router.delete("/delete-product/:id", adminProtection, deleteProduct);

module.exports = router;
