import mongoose from "mongoose";

const factoryFeedbackSchema = new mongoose.Schema({
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  factoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Factory", required: true },
  factoryFeedback: { type: String, required: true },
}, { timestamps: true });

const FactoryFeedback = mongoose.model("FactoryFeedback", factoryFeedbackSchema);
export default FactoryFeedback;
