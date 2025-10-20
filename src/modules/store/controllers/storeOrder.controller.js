import StoreOrder from "../models/storeOrder.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createOrder = asyncHandler(async (req, res) => {
  const order = await StoreOrder.create(req.body);
  return res.status(201).json(new ApiResponse(201, order, "Order created"));
});

const getOrders = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.storeId) filter.storeId = req.query.storeId;
  if (req.query.userId) filter.userId = req.query.userId;
  const orders = await StoreOrder.find(filter);
  return res.status(200).json(new ApiResponse(200, orders, "Orders fetched"));
});

const getOrder = asyncHandler(async (req, res) => {
  const order = await StoreOrder.findById(req.params.id);
  if (!order) throw new ApiError(404, "Order not found");
  return res.status(200).json(new ApiResponse(200, order, "Order fetched"));
});

const updateOrder = asyncHandler(async (req, res) => {
  const order = await StoreOrder.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!order) throw new ApiError(404, "Order not found");
  return res.status(200).json(new ApiResponse(200, order, "Order updated"));
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await StoreOrder.findByIdAndDelete(req.params.id);
  if (!order) throw new ApiError(404, "Order not found");
  return res.status(200).json(new ApiResponse(200, null, "Order deleted"));
});

export { createOrder, getOrders, getOrder, updateOrder, deleteOrder };
