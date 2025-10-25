import mongoose from "mongoose";

const factoryProductSchema = new mongoose.Schema({
  factoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Factory", required: true },
  factoryProductName: { type: String, required: true, trim: true },
  factoryProductImage: { type: String, default: "" },
  factoryMinOrderUnits: { type: Number, default: 1 },
  factoryProductDescription: { type: String, default: "" },
  factoryProductStatus: { type: String, enum: ["live", "pending"], default: "pending" },
  factoryProductReviewId: { type: mongoose.Schema.Types.ObjectId, ref: "FactoryProductReview", default: null },
  factoryProductFeedbackId: { type: mongoose.Schema.Types.ObjectId, ref: "FactoryProductFeedback", default: null },
}, { timestamps: true });

const FactoryProduct = mongoose.model("FactoryProduct", factoryProductSchema);
export default FactoryProduct;
