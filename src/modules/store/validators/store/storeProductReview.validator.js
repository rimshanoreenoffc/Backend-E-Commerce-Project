import { z } from "zod";

export const storeProductReviewSchema = z.object({
  productId: z.string().min(1),
  userId: z.string().min(1),
  storeId: z.string().min(1),
  storeProductRating: z.number().min(1).max(5),
});
