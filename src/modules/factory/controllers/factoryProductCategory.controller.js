import FactoryProductCategory from "../models/factoryProductCategory.model.js";
import { ApiError } from "../../../core/utils/api-error.js";
import { ApiResponse } from "../../../core/utils/api-response.js";
import { asyncHandler } from "../../../core/utils/async-handler.js";

const createFactoryProductCategory = asyncHandler(async (req, res) => {
  const existing = await FactoryProductCategory.findOne({ factoryId: req.body.factoryId, factoryProductCategoryName: req.body.factoryProductCategoryName });
  if (existing) throw new ApiError(400, "Category already exists for this factory");
  const cat = await FactoryProductCategory.create(req.body);
  return res.status(201).json(new ApiResponse(201, cat, "Category created"));
});

const getFactoryProductCategories = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.factoryId) filter.factoryId = req.query.factoryId;
  const cats = await FactoryProductCategory.find(filter).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, cats, "Categories fetched"));
});

const getFactoryProductCategory = asyncHandler(async (req, res) => {
  const cat = await FactoryProductCategory.findById(req.params.id);
  if (!cat) throw new ApiError(404, "Category not found");
  return res.status(200).json(new ApiResponse(200, cat, "Category fetched"));
});

const updateFactoryProductCategory = asyncHandler(async (req, res) => {
  const cat = await FactoryProductCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!cat) throw new ApiError(404, "Category not found");
  return res.status(200).json(new ApiResponse(200, cat, "Category updated"));
});

const deleteFactoryProductCategory = asyncHandler(async (req, res) => {
  const cat = await FactoryProductCategory.findByIdAndDelete(req.params.id);
  if (!cat) throw new ApiError(404, "Category not found");
  return res.status(200).json(new ApiResponse(200, null, "Category deleted"));
});

export { createFactoryProductCategory, getFactoryProductCategories, getFactoryProductCategory, updateFactoryProductCategory, deleteFactoryProductCategory };
