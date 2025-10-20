import StoreProductFeedback from "../models/storeProductFeedback.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createProductFeedback = asyncHandler(async (req, res) => {
  const fb = await StoreProductFeedback.create(req.body);
  return res.status(201).json(new ApiResponse(201, fb, "Product feedback submitted"));
});

const getProductFeedbacks = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.storeProductId) filter.storeProductId = req.query.storeProductId;
  if (req.query.storeId) filter.storeId = req.query.storeId;
  const fbs = await StoreProductFeedback.find(filter);
  return res.status(200).json(new ApiResponse(200, fbs, "Product feedbacks fetched"));
});

export { createProductFeedback, getProductFeedbacks };
