import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { storeTransactionSchema } from "../validators/store/store.validator.js";
import { createTransaction, getTransactions, getTransaction } from "../controllers/storeTransaction.controller.js";

const router = express.Router();

router.post("/", validate(storeTransactionSchema), createTransaction);
router.get("/", getTransactions);
router.get("/:id", getTransaction);

export default router;
