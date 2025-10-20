import { z } from "zod";

export const storeCategorySchema = z.object({
  categoryName: z.string().min(1),
  storeId: z.string().min(1),
  categoryLogo: z.string().url().optional(),
});
