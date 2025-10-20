import { z } from "zod";

export const storeTransactionSchema = z.object({
  storeId: z.string().min(1),
  orderId: z.string().min(1),
  cardNumber: z.string().optional(),
  cardHolderName: z.string().optional(),
  cardExpiryDate: z.string().optional(),
  cvcNumber: z.string().optional(),
  amount: z.number().nonnegative(),
  status: z.enum(["successful","failed"]).optional(),
});
