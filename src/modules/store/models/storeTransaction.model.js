import mongoose from "mongoose";

const storeTransactionSchema = new mongoose.Schema({
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  orderId: { type: String, required: true, unique: true },
  cardNumber: { type: String, default: "" },
  cardHolderName: { type: String, default: "" },
  cardExpiryDate: { type: String, default: "" },
  cvcNumber: { type: String, default: "" },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["successful", "failed"], default: "failed" },
}, { timestamps: true });

const StoreTransaction = mongoose.model("StoreTransaction", storeTransactionSchema);
export default StoreTransaction;
