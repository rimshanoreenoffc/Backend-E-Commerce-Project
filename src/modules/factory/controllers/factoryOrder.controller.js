import FactoryOrder from "../models/factoryOrder.model.js";
import { v4 as uuidv4 } from "uuid";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createFactoryOrder = asyncHandler(async (req, res) => {
  const { factoryId, factoryProductId, storeId, quantity, shippingAddress, totalAmount } = req.body;
  const orderId = uuidv4();
  const order = await FactoryOrder.create({
    orderId,
    factoryId,
    factoryProductId,
    storeId,
    quantity,
    shippingAddress,
    totalAmount
  });
  return res.status(201).json(new ApiResponse(201, order, "Factory order created"));
});

const getFactoryOrders = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.factoryId) filter.factoryId = req.query.factoryId;
  if (req.query.storeId) filter.storeId = req.query.storeId;
  const orders = await FactoryOrder.find(filter).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, orders, "Factory orders fetched"));
});

const getFactoryOrder = asyncHandler(async (req, res) => {
  const order = await FactoryOrder.findById(req.params.id);
  if (!order) throw new ApiError(404, "Order not found");
  return res.status(200).json(new ApiResponse(200, order, "Order fetched"));
});

const updateFactoryOrder = asyncHandler(async (req, res) => {
  const order = await FactoryOrder.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!order) throw new ApiError(404, "Order not found");
  return res.status(200).json(new ApiResponse(200, order, "Order updated"));
});

const deleteFactoryOrder = asyncHandler(async (req, res) => {
  const order = await FactoryOrder.findByIdAndDelete(req.params.id);
  if (!order) throw new ApiError(404, "Order not found");
  return res.status(200).json(new ApiResponse(200, null, "Order deleted"));
});

export { createFactoryOrder, getFactoryOrders, getFactoryOrder, updateFactoryOrder, deleteFactoryOrder };
