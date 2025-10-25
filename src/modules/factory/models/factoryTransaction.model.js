import mongoose from "mongoose";

const factoryTransactionSchema = new mongoose.Schema({
  factoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Factory", required: true },
  orderId: { type: String, required: true },
  cardNumber: { type: String, default: "" },
  cardUserName: { type: String, default: "" },
  cardExpiryDate: { type: String, default: "" },
  cvcNumber: { type: String, default: "" },
  transactionStatus: { type: String, enum: ["successful", "failed"], default: "failed" },
  amount: { type: Number, required: true },
}, { timestamps: true });

const FactoryTransaction = mongoose.model("FactoryTransaction", factoryTransactionSchema);
export default FactoryTransaction;
