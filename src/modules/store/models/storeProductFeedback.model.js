import mongoose from "mongoose";

const storeProductFeedbackSchema = new mongoose.Schema({
  storeProductId: { type: mongoose.Schema.Types.ObjectId, ref: "StoreProduct", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  description: { type: String, default: "" },
  storeProductImage: { type: String, default: "" },
}, { timestamps: true });

const StoreProductFeedback = mongoose.model("StoreProductFeedback", storeProductFeedbackSchema);
export default StoreProductFeedback;
