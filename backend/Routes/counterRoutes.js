import express from "express";
import {
  addCounter,
  deleteCounter,
  getCounters,
} from "../controller/counterController.js";
import authMiddle from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddle, getCounters);
router.post("/add", authMiddle, addCounter);
router.delete("/:id", authMiddle, deleteCounter);

export default router;
