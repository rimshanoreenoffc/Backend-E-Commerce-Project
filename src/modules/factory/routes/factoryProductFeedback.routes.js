import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { factoryProductFeedbackSchema } from "../validators/factory.validator.js";
import { createFactoryProductFeedback, getFactoryProductFeedbacks } from "../controllers/factoryProductFeedback.controller.js";

const router = express.Router();

router.post("/", validate(factoryProductFeedbackSchema), createFactoryProductFeedback);
router.get("/", getFactoryProductFeedbacks);

export default router;
