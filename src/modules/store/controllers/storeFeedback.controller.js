import StoreFeedback from "../models/storeFeedback.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createFeedback = asyncHandler(async (req, res) => {
  const fb = await StoreFeedback.create(req.body);
  return res.status(201).json(new ApiResponse(201, fb, "Feedback submitted"));
});

const getFeedbacks = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.storeId) filter.storeId = req.query.storeId;
  const fbs = await StoreFeedback.find(filter);
  return res.status(200).json(new ApiResponse(200, fbs, "Feedbacks fetched"));
});

export { createFeedback, getFeedbacks };
