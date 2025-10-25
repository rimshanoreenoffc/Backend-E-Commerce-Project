import mongoose from "mongoose";

const factorySchema = new mongoose.Schema({
  factoryName: { type: String, required: true, trim: true },
  factoryDescription: { type: String, default: "" },
  factoryCoverImage: { type: String, default: "" },
  factoryLogo: { type: String, default: "" },
  factoryIsBlocked: { type: Boolean, default: false },
  factoryIsSuspended: { type: Boolean, default: false },
  factoryLicenseNumber: { type: String, default: "" },
  factoryLicenseImage: { type: String, default: "" },
  IdCardNumber: { type: String, default: "" },
  factoryStatus: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  factoryCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "FactoryProductCategory", default: null },
}, { timestamps: true });

const Factory = mongoose.model("Factory", factorySchema);
export default Factory;
