import FactoryProductReview from "../models/factoryProductReview.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createFactoryProductReview = asyncHandler(async (req, res) => {
  const rev = await FactoryProductReview.create(req.body);
  return res.status(201).json(new ApiResponse(201, rev, "Review submitted"));
});

const getFactoryProductReviews = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.factoryProductId) filter.factoryProductId = req.query.factoryProductId;
  if (req.query.factoryId) filter.factoryId = req.query.factoryId;
  const revs = await FactoryProductReview.find(filter).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, revs, "Reviews fetched"));
});

export { createFactoryProductReview, getFactoryProductReviews };
