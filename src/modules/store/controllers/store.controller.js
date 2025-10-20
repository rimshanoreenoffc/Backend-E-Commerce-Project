import Store from "../models/store.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createStore = asyncHandler(async (req, res) => {
  const existing = await Store.findOne({ storeName: req.body.storeName });
  if (existing) throw new ApiError(400, "Store with this name already exists");
  const store = await Store.create(req.body);
  return res.status(201).json(new ApiResponse(201, store, "Store created"));
});

const getStores = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.userID) filter.userID = req.query.userID;
  const stores = await Store.find(filter);
  return res.status(200).json(new ApiResponse(200, stores, "Stores fetched"));
});

const getStore = asyncHandler(async (req, res) => {
  const store = await Store.findById(req.params.id);
  if (!store) throw new ApiError(404, "Store not found");
  return res.status(200).json(new ApiResponse(200, store, "Store fetched"));
});

const updateStore = asyncHandler(async (req, res) => {
  const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!store) throw new ApiError(404, "Store not found");
  return res.status(200).json(new ApiResponse(200, store, "Store updated"));
});

const deleteStore = asyncHandler(async (req, res) => {
  const store = await Store.findByIdAndDelete(req.params.id);
  if (!store) throw new ApiError(404, "Store not found");
  return res.status(200).json(new ApiResponse(200, null, "Store deleted"));
});

export { createStore, getStores, getStore, updateStore, deleteStore };
