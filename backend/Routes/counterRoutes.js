import express from "express";
import {
  addCounter,
  deleteCounter,
  getCounters,
  incrementValue,
} from "../controller/counterController.js";
import authMiddle from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddle, getCounters);
router.post("/add", authMiddle, addCounter);
router.delete("/:id", authMiddle, deleteCounter);
router.put("/increment/:id", incrementValue);

export default router;
