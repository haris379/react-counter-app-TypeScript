import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import express from "express";
import authRoutes from "./Routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log(`Server is running on Port 3001`);
});
