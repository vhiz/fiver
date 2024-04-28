import express from "express";
import { Seller } from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.post("/seller", verifyToken, Seller);
export default router;
