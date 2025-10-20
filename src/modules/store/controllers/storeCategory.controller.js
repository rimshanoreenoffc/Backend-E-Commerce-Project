import StoreProductCategory from "../models/storeProductCategory.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createCategory = asyncHandler(async (req, res) => {
  const cat = await StoreProductCategory.create(req.body);
  return res.status(201).json(new ApiResponse(201, cat, "Category created"));
});

const getCategories = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.storeId) filter.storeId = req.query.storeId;
  const cats = await StoreProductCategory.find(filter);
  return res.status(200).json(new ApiResponse(200, cats, "Categories fetched"));
});

const getCategory = asyncHandler(async (req, res) => {
  const cat = await StoreProductCategory.findById(req.params.id);
  if (!cat) throw new ApiError(404, "Category not found");
  return res.status(200).json(new ApiResponse(200, cat, "Category fetched"));
});

const updateCategory = asyncHandler(async (req, res) => {
  const cat = await StoreProductCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!cat) throw new ApiError(404, "Category not found");
  return res.status(200).json(new ApiResponse(200, cat, "Category updated"));
});

const deleteCategory = asyncHandler(async (req, res) => {
  const cat = await StoreProductCategory.findByIdAndDelete(req.params.id);
  if (!cat) throw new ApiError(404, "Category not found");
  return res.status(200).json(new ApiResponse(200, null, "Category deleted"));
});

export { createCategory, getCategories, getCategory, updateCategory, deleteCategory };
