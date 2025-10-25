import FactoryProductFeedback from "../models/factoryProductFeedback.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createFactoryProductFeedback = asyncHandler(async (req, res) => {
  const fb = await FactoryProductFeedback.create(req.body);
  return res.status(201).json(new ApiResponse(201, fb, "Product feedback submitted"));
});

const getFactoryProductFeedbacks = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.factoryProductId) filter.factoryProductId = req.query.factoryProductId;
  if (req.query.factoryId) filter.factoryId = req.query.factoryId;
  const fbs = await FactoryProductFeedback.find(filter).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, fbs, "Product feedbacks fetched"));
});

export { createFactoryProductFeedback, getFactoryProductFeedbacks };
