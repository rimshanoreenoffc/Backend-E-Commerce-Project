import { z } from "zod";

export const storeOrderSchema = z.object({
  storeId: z.string().min(1),
  storeProductId: z.string().min(1),
  userId: z.string().min(1),
  quantity: z.number().int().positive().optional(),
  shippingAddress: z.string().optional(),
  paymentStatus: z.enum(["pending","paid","failed"]).optional(),
  orderStatus: z.enum(["pending","processing","shipped","delivered","cancelled"]).optional(),
  totalAmount: z.number().nonnegative(),
  orderId: z.string().min(1),
});
