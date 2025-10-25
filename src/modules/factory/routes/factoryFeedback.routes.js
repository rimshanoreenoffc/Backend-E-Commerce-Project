import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { factoryFeedbackSchema } from "../validators/factory.validator.js";
import { createFactoryFeedback, getFactoryFeedbacks } from "../controllers/factoryFeedback.controller.js";

const router = express.Router();

router.post("/", validate(factoryFeedbackSchema), createFactoryFeedback);
router.get("/", getFactoryFeedbacks);

export default router;
