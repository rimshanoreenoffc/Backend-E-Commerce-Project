import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { factoryOrderSchema } from "../validators/factory.validator.js";
import { createFactoryOrder, getFactoryOrders, getFactoryOrder, updateFactoryOrder, deleteFactoryOrder } from "../controllers/factoryOrder.controller.js";

const router = express.Router();

router.post("/", validate(factoryOrderSchema), createFactoryOrder);
router.get("/", getFactoryOrders);
router.get("/:id", getFactoryOrder);
router.put("/:id", validate(factoryOrderSchema), updateFactoryOrder);
router.delete("/:id", deleteFactoryOrder);

export default router;
