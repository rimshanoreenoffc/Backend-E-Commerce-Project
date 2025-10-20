import mongoose from "mongoose";

const storeOrderSchema = new mongoose.Schema({
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  storeProductId: { type: mongoose.Schema.Types.ObjectId, ref: "StoreProduct", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  quantity: { type: Number, default: 1 },
  shippingAddress: { type: String, default: "" },
  paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  orderStatus: { type: String, enum: ["pending", "processing", "shipped", "delivered", "cancelled"], default: "pending" },
  trackingId: { type: String, default: "" },
  totalAmount: { type: Number, required: true },
  orderId: { type: String, required: true, unique: true },
}, { timestamps: true });

const StoreOrder = mongoose.model("StoreOrder", storeOrderSchema);
export default StoreOrder;
