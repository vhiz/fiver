import express from "express";
import { Seller } from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.post("/seller", verifyToken, Seller);
router.get("/token", (req, res) => {
  res.status(200).json("logged in");
});
export default router;
