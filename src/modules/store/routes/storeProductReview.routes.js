import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { storeProductReviewSchema } from "../validators/store/storeProductReview.validator.js";
import { createReview, getReviews } from "../controllers/storeProductReview.controller.js";

const router = express.Router();

router.post("/", validate(storeProductReviewSchema), createReview);
router.get("/", getReviews);

export default router;
