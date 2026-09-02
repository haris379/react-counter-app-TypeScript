import express from "express";
import {getAllUser} from "../controller/userController.js";

const router = express.Router();

router.get("/all-users" , getAllUser);

export default router
