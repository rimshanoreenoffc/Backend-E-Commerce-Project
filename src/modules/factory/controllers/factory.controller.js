import Factory from "../models/factory.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createFactory = asyncHandler(async (req, res) => {

  const {factoryName} = req.body
  const existing = await Factory.findOne({factoryName });
  if (existing) throw new ApiError(400, "Factory with this name already exists");
  const factory = await Factory.create(req.body);
  return res.status(201).json(new ApiResponse(201, factory, "Factory created"));
});

const getFactories = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.factoryStatus) filter.factoryStatus = req.query.factoryStatus;
  const factories = await Factory.find(filter).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, factories, "Factories fetched"));
});

const getFactory = asyncHandler(async (req, res) => {
  const factory = await Factory.findById(req.params.id);
  if (!factory) throw new ApiError(404, "Factory not found");
  return res.status(200).json(new ApiResponse(200, factory, "Factory fetched"));
});

const updateFactory = asyncHandler(async (req, res) => {
  const factory = await Factory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!factory) throw new ApiError(404, "Factory not found");
  return res.status(200).json(new ApiResponse(200, factory, "Factory updated"));
});

const deleteFactory = asyncHandler(async (req, res) => {
  const factory = await Factory.findByIdAndDelete(req.params.id);
  if (!factory) throw new ApiError(404, "Factory not found");
  return res.status(200).json(new ApiResponse(200, null, "Factory deleted"));
});

export { createFactory, getFactories, getFactory, updateFactory, deleteFactory };
