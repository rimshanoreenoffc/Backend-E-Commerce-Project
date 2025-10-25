import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { factoryTransactionSchema } from "../validators/factory.validator.js";
import { createFactoryTransaction, getFactoryTransactions, getFactoryTransaction } from "../controllers/factoryTransaction.controller.js";

const router = express.Router();

router.post("/", validate(factoryTransactionSchema), createFactoryTransaction);
router.get("/", getFactoryTransactions);
router.get("/:id", getFactoryTransaction);

export default router;
