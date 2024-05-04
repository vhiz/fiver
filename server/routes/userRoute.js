import express from "express";
import { Seller, UpdateUser } from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.post("/seller", verifyToken, Seller);
router.put("/update", verifyToken, UpdateUser);
router.get("/token", (req, res) => {
  res.status(200).json("logged in");
});
export default router;
