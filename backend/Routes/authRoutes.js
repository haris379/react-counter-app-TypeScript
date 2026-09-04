import express from "express";
import { signup, loginSpecificUser } from "../controller/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login/:id", loginSpecificUser);

export default router;
