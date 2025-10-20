import StoreProductReview from "../models/storeProductReview.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createReview = asyncHandler(async (req, res) => {
  const rev = await StoreProductReview.create(req.body);
  return res.status(201).json(new ApiResponse(201, rev, "Review submitted"));
});

const getReviews = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.productId) filter.productId = req.query.productId;
  if (req.query.storeId) filter.storeId = req.query.storeId;
  const revs = await StoreProductReview.find(filter);
  return res.status(200).json(new ApiResponse(200, revs, "Reviews fetched"));
});

export { createReview, getReviews };
