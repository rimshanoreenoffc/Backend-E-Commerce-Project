import { z } from "zod";

export const storeProductSchema = z.object({
  storeId: z.string().min(1),
  productName: z.string().min(1),
  productDescription: z.string().optional(),
  productCategoryId: z.string().optional(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative().optional(),
  productImage: z.string().url().optional(),
  isActive: z.boolean().optional(),
  productStatus: z.enum(["live","pending"]).optional(),
});
