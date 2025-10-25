import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { factoryProductCategorySchema } from "../validators/factory.validator.js";
import { createFactoryProductCategory, getFactoryProductCategories, getFactoryProductCategory, updateFactoryProductCategory, deleteFactoryProductCategory } from "../controllers/factoryProductCategory.controller.js";

const router = express.Router();

router.post("/", validate(factoryProductCategorySchema), createFactoryProductCategory);
router.get("/", getFactoryProductCategories);
router.get("/:id", getFactoryProductCategory);
router.put("/:id", validate(factoryProductCategorySchema), updateFactoryProductCategory);
router.delete("/:id", deleteFactoryProductCategory);

export default router;
