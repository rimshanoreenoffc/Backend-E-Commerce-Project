import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import { errorHandler } from "./src/core/middleware/errorHandler.js";
import authRouter from "./src/modules/auth/auth.route.js";

// user
import userRouter from "./src/modules/user/user.route.js";

// admin
import adminRouter from "./src/modules/admin/admin.route.js";

// store
import storeRoutes from "./src/modules/store/routes/store.routes.js";
import storeProductRoutes from "./src/modules/store/routes/storeProduct.routes.js";
import storeCategoryRoutes from "./src/modules/store/routes/storeCategory.routes.js";
import storeOrderRoutes from "./src/modules/store/routes/storeOrder.routes.js";
import storeTransactionRoutes from "./src/modules/store/routes/storeTransaction.routes.js";
import storeFeedbackRoutes from "./src/modules/store/routes/storeFeedback.routes.js";
import storeProductFeedbackRoutes from "./src/modules/store/routes/storeProductFeedback.routes.js";
import storeProductReviewRoutes from "./src/modules/store/routes/storeProductReview.routes.js";

// factory
import factoryRoutes from "./src/modules/factory/routes/factory.routes.js";
import factoryProductRoutes from "./src/modules/factory/routes/factoryProduct.routes.js";
import factoryProductCategoryRoutes from "./src/modules/factory/routes/factoryProductCategory.routes.js";
import factoryOrderRoutes from "./src/modules/factory/routes/factoryOrder.routes.js";
import factoryTransactionRoutes from "./src/modules/factory/routes/factoryTransaction.routes.js";
import factoryFeedbackRoutes from "./src/modules/factory/routes/factoryFeedback.routes.js";
import factoryProductFeedbackRoutes from "./src/modules/factory/routes/factoryProductFeedback.routes.js";
import factoryProductReviewRoutes from "./src/modules/factory/routes/factoryProductReview.routes.js";

const app = express()

dotenv.config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Multivendor Store API is running successfully!");
});

app.use("/api/v1/auth", authRouter)

// user
app.use("/api/v1/users", userRouter)

// admin
app.use("/api/v1/admin", adminRouter)

// store
app.use("/api/v1/stores", storeRoutes);
app.use("/api/v1/store-products", storeProductRoutes);
app.use("/api/v1/store-categories", storeCategoryRoutes);
app.use("/api/v1/store-orders", storeOrderRoutes);
app.use("/api/v1/store-transactions", storeTransactionRoutes);
app.use("/api/v1/store-feedback", storeFeedbackRoutes);
app.use("/api/v1/store-product-feedback", storeProductFeedbackRoutes);
app.use("/api/v1/store-product-reviews", storeProductReviewRoutes);

// factory
app.use("/api/v1/factory", factoryRoutes);
app.use("/api/v1/factory-products", factoryProductRoutes);
app.use("/api/v1/factory-product-categories", factoryProductCategoryRoutes);
app.use("/api/v1/factory-orders", factoryOrderRoutes);
app.use("/api/v1/factory-transactions", factoryTransactionRoutes);
app.use("/api/v1/factory-feedbacks", factoryFeedbackRoutes);
app.use("/api/v1/factory-product-feedbacks", factoryProductFeedbackRoutes);
app.use("/api/v1/factory-product-reviews", factoryProductReviewRoutes);


app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: '🚀 Server is running smoothly - Module Structure',
        timestamp: new Date().toISOString()
    });
});


app.use(errorHandler)

export default app