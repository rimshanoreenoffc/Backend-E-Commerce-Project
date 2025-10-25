import mongoose from "mongoose";

const factoryOrderSchema = new mongoose.Schema({
  factoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Factory", required: true },
  factoryProductId: { type: mongoose.Schema.Types.ObjectId, ref: "FactoryProduct", required: true },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  quantity: { type: Number, default: 1 },
  shippingAddress: { type: String, default: "" },
  paymentStatus: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  orderStatus: { type: String, enum: ["pending", "processing", "shipped", "delivered", "cancelled"], default: "pending" },
  trackingId: { type: String, default: "" },
  totalAmount: { type: Number, required: true },
  orderId: { type: String, required: true, unique: true },
}, { timestamps: true });

const FactoryOrder = mongoose.model("FactoryOrder", factoryOrderSchema);
export default FactoryOrder;
