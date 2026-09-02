import express from "express";
import { getAllUser, getUser } from "../controller/userController.js";

const router = express.Router();

router.get("/all-users", getAllUser);
router.get("/:id", getUser);


export default router;
