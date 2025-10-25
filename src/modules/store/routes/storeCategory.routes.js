import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { storeCategorySchema } from "../validators/store/store.validator.js";
import { createCategory, getCategories, getCategory, updateCategory, deleteCategory } from "../controllers/storeCategory.controller.js";

const router = express.Router();

router.post("/", validate(storeCategorySchema), createCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);
router.put("/:id", validate(storeCategorySchema), updateCategory);
router.delete("/:id", deleteCategory);

export default router;
