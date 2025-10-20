import StoreTransaction from "../models/storeTransaction.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createTransaction = asyncHandler(async (req, res) => {
  const trx = await StoreTransaction.create(req.body);
  return res.status(201).json(new ApiResponse(201, trx, "Transaction recorded"));
});

const getTransactions = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.storeId) filter.storeId = req.query.storeId;
  if (req.query.orderId) filter.orderId = req.query.orderId;
  const txs = await StoreTransaction.find(filter);
  return res.status(200).json(new ApiResponse(200, txs, "Transactions fetched"));
});

const getTransaction = asyncHandler(async (req, res) => {
  const tx = await StoreTransaction.findById(req.params.id);
  if (!tx) throw new ApiError(404, "Transaction not found");
  return res.status(200).json(new ApiResponse(200, tx, "Transaction fetched"));
});

export { createTransaction, getTransactions, getTransaction };
