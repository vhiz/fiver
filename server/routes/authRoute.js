import express from "express";
import { Login, Logout, Register } from "../controller/authController.js";
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
export default router;
