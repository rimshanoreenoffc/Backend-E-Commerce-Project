import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { storeOrderSchema } from "../validators/store/storeOrder.validator.js";
import { createOrder, getOrders, getOrder, updateOrder, deleteOrder } from "../controllers/storeOrder.controller.js";

const router = express.Router();

router.post("/", validate(storeOrderSchema), createOrder);
router.get("/", getOrders);
router.get("/:id", getOrder);
router.put("/:id", validate(storeOrderSchema), updateOrder);
router.delete("/:id", deleteOrder);

export default router;
