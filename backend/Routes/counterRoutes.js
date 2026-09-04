import express from "express";
import {
  addCounter,
  decrementValue,
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
router.put("/decrement/:id", decrementValue);

export default router;
