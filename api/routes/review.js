import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview,
  deleteReview,
  getReview,
} from "../controllers/review.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:id", getReview);
router.delete("/:id", verifyToken, deleteReview);

export default router;
