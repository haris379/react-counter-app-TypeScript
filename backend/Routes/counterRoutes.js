import express from "express";
import { addCounter } from "../controller/counterController.js";
import authMiddle from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddle, addCounter);

export default router;
