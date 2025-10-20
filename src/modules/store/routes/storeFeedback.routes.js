import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { storeFeedbackSchema } from "../validators/store/storeFeedback.validator.js";
import { createFeedback, getFeedbacks } from "../controllers/storeFeedback.controller.js";

const router = express.Router();

router.post("/", validate(storeFeedbackSchema), createFeedback);
router.get("/", getFeedbacks);

export default router;
