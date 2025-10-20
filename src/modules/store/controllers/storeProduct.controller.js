import StoreProduct from "../models/storeProduct.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createProduct = asyncHandler(async (req, res) => {
  const product = await StoreProduct.create(req.body);
  return res.status(201).json(new ApiResponse(201, product, "Product created"));
});

const getProducts = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.storeId) filter.storeId = req.query.storeId;
  const products = await StoreProduct.find(filter);
  return res.status(200).json(new ApiResponse(200, products, "Products fetched"));
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await StoreProduct.findById(req.params.id);
  if (!product) throw new ApiError(404, "Product not found");
  return res.status(200).json(new ApiResponse(200, product, "Product fetched"));
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await StoreProduct.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!product) throw new ApiError(404, "Product not found");
  return res.status(200).json(new ApiResponse(200, product, "Product updated"));
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await StoreProduct.findByIdAndDelete(req.params.id);
  if (!product) throw new ApiError(404, "Product not found");
  return res.status(200).json(new ApiResponse(200, null, "Product deleted"));
});

export { createProduct, getProducts, getProduct, updateProduct, deleteProduct };
