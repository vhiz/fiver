import e from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { AddReview } from "../controller/reviewController.js";
const router = e.Router();

router.post('/', verifyToken,AddReview)
export default router;
