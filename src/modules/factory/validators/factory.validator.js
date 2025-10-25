import { z } from "zod";

// factoryRegisterSchema
export const factoryRegisterSchema = z.object({
  factoryName: z.string().min(2),
  factoryDescription: z.string().optional(),
  factoryCoverImage: z.string().url().optional(),
  factoryLogo: z.string().url().optional(),
  factoryLicenseNumber: z.string().optional(),
  factoryLicenseImage: z.string().url().optional(),
  IdCardNumber: z.string().optional(),
  factoryCategoryId: z.string().optional(),
});


// factoryFeedbackSchema
export const factoryFeedbackSchema = z.object({
  storeId: z.string().min(1),
  factoryId: z.string().min(1),
  factoryFeedback: z.string().min(1),
});


// factoryOrderSchema
export const factoryOrderSchema = z.object({
  orderId: z.string().optional(),
  factoryId: z.string().min(1),
  factoryProductId: z.string().min(1),
  storeId: z.string().min(1),
  quantity: z.number().int().positive().optional(),
  shippingAddress: z.string().optional(),
  paymentStatus: z.enum(["pending","completed","failed"]).optional(),
  orderStatus: z.enum(["pending","processing","shipped","delivered","cancelled"]).optional(),
  totalAmount: z.number().nonnegative(),
});


// factoryProductSchema
export const factoryProductSchema = z.object({
  factoryId: z.string().min(1),
  factoryProductName: z.string().min(2),
  factoryProductImage: z.string().url().optional(),
  factoryMinOrderUnits: z.number().int().positive().optional(),
  factoryProductDescription: z.string().optional(),
  factoryProductStatus: z.enum(["live","pending"]).optional(),
});


// factoryProductCategorySchema
export const factoryProductCategorySchema = z.object({
  factoryId: z.string().min(1),
  factoryProductCategoryName: z.string().min(2),
  factoryProductCategoryLogo: z.string().url().optional(),
});


// factoryProductFeedbackSchema
export const factoryProductFeedbackSchema = z.object({
  factoryProductId: z.string().min(1),
  storeId: z.string().min(1),
  factoryId: z.string().min(1),
  description: z.string().optional(),
  factoryProductImage: z.string().url().optional(),
});


// factoryProductReviewSchema
export const factoryProductReviewSchema = z.object({
  factoryProductId: z.string().min(1),
  storeId: z.string().min(1),
  factoryId: z.string().min(1),
  factoryProductRating: z.number().min(1).max(5),
});


// factoryTransactionSchema
export const factoryTransactionSchema = z.object({
  factoryId: z.string().min(1),
  orderId: z.string().min(1),
  cardNumber: z.string().optional(),
  cardUserName: z.string().optional(),
  cardExpiryDate: z.string().optional(),
  cvcNumber: z.string().optional(),
  transactionStatus: z.enum(["successful","failed"]).optional(),
  amount: z.number().nonnegative(),
});