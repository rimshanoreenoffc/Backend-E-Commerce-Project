import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  storeName: { type: String, required: true, trim: true },
  storeLogo: { type: String, default: "" },
  storeCoverImage: { type: String, default: "" },
  storeDescription: { type: String, default: "" },
  storeCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "StoreProductCategory", default: null },
  storeProductId: { type: mongoose.Schema.Types.ObjectId, ref: "StoreProduct", default: null },
  idCardNumber: { type: String, default: "" },
  idCardImage: { type: String, default: "" },
  isBlocked: { type: Boolean, default: false },
  isSuspended: { type: Boolean, default: false },
  storeStatus: { type: String, enum: ["pending", "live", "rejected"], default: "pending" },
}, { timestamps: true });

const Store = mongoose.model("Store", storeSchema);
export default Store;
