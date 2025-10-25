import mongoose from "mongoose";

const factoryProductCategorySchema = new mongoose.Schema({
  factoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Factory", required: true },
  factoryProductCategoryName: { type: String, required: true, trim: true },
  factoryProductCategoryLogo: { type: String, default: "" },
}, { timestamps: true });

const FactoryProductCategory = mongoose.model("FactoryProductCategory", factoryProductCategorySchema);
export default FactoryProductCategory;
