import e from "express";
import {
  CreateGig,
  DeleteGig,
  GetGig,
  GetGigs,
} from "../controller/gigController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = e.Router();

router.post("/", verifyToken, CreateGig);
router.get("/", GetGigs);
router.get("/single/:id", GetGig);
router.delete("/:id", verifyToken, DeleteGig);
export default router;
