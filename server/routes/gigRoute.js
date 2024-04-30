import e from "express";
import {
  CreateGig,
  DeleteGig,
  GetGig,
  GetGigs,
  GetUserGigs,
  LikeGig,
} from "../controller/gigController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = e.Router();

router.post("/", verifyToken, CreateGig);
router.get("/", GetGigs);
router.get("/single/:id", GetGig);
router.post("/delete", verifyToken, DeleteGig);
router.post("/like", verifyToken, LikeGig);
router.get("/mygigs", verifyToken, GetUserGigs);
export default router;
