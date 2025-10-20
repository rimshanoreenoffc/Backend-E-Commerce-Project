import mongoose from "mongoose";

const storeProductCategorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true, trim: true },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  categoryLogo: { type: String, default: "" },
}, { timestamps: true });

const StoreProductCategory = mongoose.model("StoreProductCategory", storeProductCategorySchema);
export default StoreProductCategory;
