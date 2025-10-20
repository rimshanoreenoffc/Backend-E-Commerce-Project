import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { storeProductFeedbackSchema } from "../validators/store/storeProductFeedback.validator.js";
import { createProductFeedback, getProductFeedbacks } from "../controllers/storeProductFeedback.controller.js";

const router = express.Router();

router.post("/", validate(storeProductFeedbackSchema), createProductFeedback);
router.get("/", getProductFeedbacks);

export default router;
