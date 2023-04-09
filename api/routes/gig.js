import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createGig, deleteGig, getGigs, singleGig } from "../controllers/gig.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", singleGig);
router.get("/", getGigs);

export default router;
