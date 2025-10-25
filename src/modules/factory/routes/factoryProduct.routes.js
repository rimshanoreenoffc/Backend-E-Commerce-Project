import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { factoryProductSchema } from "../validators/factory.validator.js";
import { createFactoryProduct, getFactoryProducts, getFactoryProduct, updateFactoryProduct, deleteFactoryProduct } from "../controllers/factoryProduct.controller.js";

const router = express.Router();

router.post("/", validate(factoryProductSchema), createFactoryProduct);
router.get("/", getFactoryProducts);
router.get("/:id", getFactoryProduct);
router.put("/:id", validate(factoryProductSchema), updateFactoryProduct);
router.delete("/:id", deleteFactoryProduct);

export default router;
