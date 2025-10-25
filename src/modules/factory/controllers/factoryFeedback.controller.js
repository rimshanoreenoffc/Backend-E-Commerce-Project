import FactoryFeedback from "../models/factoryFeedback.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createFactoryFeedback = asyncHandler(async (req, res) => {
  const fb = await FactoryFeedback.create(req.body);
  return res.status(201).json(new ApiResponse(201, fb, "Feedback submitted"));
});

const getFactoryFeedbacks = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.factoryId) filter.factoryId = req.query.factoryId;
  if (req.query.storeId) filter.storeId = req.query.storeId;
  const fbs = await FactoryFeedback.find(filter).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, fbs, "Feedbacks fetched"));
});

export { createFactoryFeedback, getFactoryFeedbacks };
