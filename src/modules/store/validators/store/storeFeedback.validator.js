import { z } from "zod";

export const storeFeedbackSchema = z.object({
  userId: z.string().min(1),
  storeFeedback: z.string().min(1),
  storeId: z.string().min(1),
});
