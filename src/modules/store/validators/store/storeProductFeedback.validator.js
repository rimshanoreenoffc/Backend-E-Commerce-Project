import { z } from "zod";

export const storeProductFeedbackSchema = z.object({
  storeProductId: z.string().min(1),
  userId: z.string().min(1),
  storeId: z.string().min(1),
  description: z.string().optional(),
  storeProductImage: z.string().url().optional(),
});
