import express from "express";
import {
  AddConversation,
  AddMessage,
  GetConversation,
  GetConversations,
} from "../controller/conversationController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, AddConversation);
router.get("/", verifyToken, GetConversations);
router.get("/single/:id", verifyToken, GetConversation);
router.post("/message", verifyToken, AddMessage);
export default router;
