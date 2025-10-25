import FactoryTransaction from "../models/factoryTransaction.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createFactoryTransaction = asyncHandler(async (req, res) => {
  const trx = await FactoryTransaction.create(req.body);
  return res.status(201).json(new ApiResponse(201, trx, "Transaction recorded"));
});

const getFactoryTransactions = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.factoryId) filter.factoryId = req.query.factoryId;
  if (req.query.orderId) filter.orderId = req.query.orderId;
  const txs = await FactoryTransaction.find(filter).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, txs, "Transactions fetched"));
});

const getFactoryTransaction = asyncHandler(async (req, res) => {
  const tx = await FactoryTransaction.findById(req.params.id);
  if (!tx) throw new ApiError(404, "Transaction not found");
  return res.status(200).json(new ApiResponse(200, tx, "Transaction fetched"));
});

export { createFactoryTransaction, getFactoryTransactions, getFactoryTransaction };
