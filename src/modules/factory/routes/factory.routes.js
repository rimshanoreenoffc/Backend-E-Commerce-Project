import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { factoryRegisterSchema } from "../validators/factory.validator.js";
import { createFactory, getFactories, getFactory, updateFactory, deleteFactory } from "../controllers/factory.controller.js";

const router = express.Router();

router.post("/", validate(factoryRegisterSchema), createFactory);
router.get("/", getFactories);
router.get("/:id", getFactory);
router.put("/:id", validate(factoryRegisterSchema), updateFactory);
router.delete("/:id", deleteFactory);

export default router;
