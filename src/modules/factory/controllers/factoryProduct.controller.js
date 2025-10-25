import FactoryProduct from "../models/factoryProduct.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createFactoryProduct = asyncHandler(async (req, res) => {
  const existing = await FactoryProduct.findOne({ factoryProductName: req.body.factoryProductName, factoryId: req.body.factoryId });
  if (existing) throw new ApiError(400, "Product with this name already exists for this factory");
  const product = await FactoryProduct.create(req.body);
  return res.status(201).json(new ApiResponse(201, product, "Factory product created"));
});

const getFactoryProducts = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.factoryId) filter.factoryId = req.query.factoryId;
  const products = await FactoryProduct.find(filter).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, products, "Factory products fetched"));
});

const getFactoryProduct = asyncHandler(async (req, res) => {
  const product = await FactoryProduct.findById(req.params.id);
  if (!product) throw new ApiError(404, "Product not found");
  return res.status(200).json(new ApiResponse(200, product, "Product fetched"));
});

const updateFactoryProduct = asyncHandler(async (req, res) => {
  const product = await FactoryProduct.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!product) throw new ApiError(404, "Product not found");
  return res.status(200).json(new ApiResponse(200, product, "Product updated"));
});

const deleteFactoryProduct = asyncHandler(async (req, res) => {
  const product = await FactoryProduct.findByIdAndDelete(req.params.id);
  if (!product) throw new ApiError(404, "Product not found");
  return res.status(200).json(new ApiResponse(200, null, "Product deleted"));
});

export { createFactoryProduct, getFactoryProducts, getFactoryProduct, updateFactoryProduct, deleteFactoryProduct };
