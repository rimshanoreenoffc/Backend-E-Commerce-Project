import { z } from "zod";

export const storeRegisterSchema = z.object({
  userID: z.string().min(1),
  storeName: z.string().min(2),
  storeLogo: z.string().url().optional(),
  storeCoverImage: z.string().url().optional(),
  storeDescription: z.string().optional(),
  storeCategoryId: z.string().optional(),
  idCardNumber: z.string().min(5).optional(),
  idCardImage: z.string().url().optional(),
});
