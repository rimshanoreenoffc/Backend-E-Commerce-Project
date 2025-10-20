import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { storeProductSchema } from "../validators/store/storeProduct.validator.js";
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from "../controllers/storeProduct.controller.js";

const router = express.Router();

router.post("/", validate(storeProductSchema), createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", validate(storeProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
