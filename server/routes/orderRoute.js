import express from "express";
import { CreateOrder, GetOrders } from "../controller/orderController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, GetOrders);
router.post("/", verifyToken, CreateOrder);
export default router;
