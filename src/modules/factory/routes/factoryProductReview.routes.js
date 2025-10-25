import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { factoryProductReviewSchema } from "../validators/factory.validator.js";
import { createFactoryProductReview, getFactoryProductReviews } from "../controllers/factoryProductReview.controller.js";

const router = express.Router();

router.post("/", validate(factoryProductReviewSchema), createFactoryProductReview);
router.get("/", getFactoryProductReviews);

export default router;
