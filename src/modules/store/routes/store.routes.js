import express from "express";
import { validate } from "../../../core/middleware/validate.js";
import { storeRegisterSchema } from "../validators/store/store.validator.js";
import { createStore, getStores, getStore, updateStore, deleteStore } from "../controllers/store.controller.js";

const router = express.Router();

router.post("/", validate(storeRegisterSchema), createStore);
router.get("/", getStores);
router.get("/:id", getStore);
router.put("/:id", validate(storeRegisterSchema), updateStore);
router.delete("/:id", deleteStore);

export default router;
