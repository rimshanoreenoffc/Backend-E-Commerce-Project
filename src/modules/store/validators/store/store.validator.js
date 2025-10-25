import { z } from "zod";

// storeRegisterSchema
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


// storeCategorySchema
export const storeCategorySchema = z.object({
  categoryName: z.string().min(1),
  storeId: z.string().min(1),
  categoryLogo: z.string().url().optional(),
});


// storeFeedbackSchema
export const storeFeedbackSchema = z.object({
  userId: z.string().min(1),
  storeFeedback: z.string().min(1),
  storeId: z.string().min(1),
});


// storeOrderSchema
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


// storeProductSchema
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


// storeProductFeedbackSchema
export const storeProductFeedbackSchema = z.object({
  storeProductId: z.string().min(1),
  userId: z.string().min(1),
  storeId: z.string().min(1),
  description: z.string().optional(),
  storeProductImage: z.string().url().optional(),
});


// storeProductReviewSchema
export const storeProductReviewSchema = z.object({
  productId: z.string().min(1),
  userId: z.string().min(1),
  storeId: z.string().min(1),
  storeProductRating: z.number().min(1).max(5),
});


// storeTransactionSchema
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