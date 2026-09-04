import express from "express";
import { addCounter, deleteCounter } from "../controller/counterController.js";
import authMiddle from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddle, addCounter);
router.delete("/:id", authMiddle, deleteCounter);

export default router;
