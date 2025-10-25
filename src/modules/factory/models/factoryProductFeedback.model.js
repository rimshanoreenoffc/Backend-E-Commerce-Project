import mongoose from "mongoose";

const factoryProductFeedbackSchema = new mongoose.Schema({
  factoryProductId: { type: mongoose.Schema.Types.ObjectId, ref: "FactoryProduct", required: true },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  factoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Factory", required: true },
  description: { type: String, default: "" },
  factoryProductImage: { type: String, default: "" },
}, { timestamps: true });

const FactoryProductFeedback = mongoose.model("FactoryProductFeedback", factoryProductFeedbackSchema);
export default FactoryProductFeedback;
