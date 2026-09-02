import express from "express";
import {getAllUser} from "../controller/userController.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/all-users" , getAllUser);

export default router
