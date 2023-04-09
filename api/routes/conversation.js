import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createConversation,
  getConversation,
  getConversations,
  updateConversation,
} from "../controllers/conversation.js";

const router = express.Router();

router.post("/", verifyToken, createConversation);
router.get("/", verifyToken, getConversations);
router.get("/single/:id", verifyToken, getConversation);
router.put("/:id", verifyToken, updateConversation);

export default router;
