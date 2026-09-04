import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.log("MongoDB not connected ");
    console.log(`Error : ${error.message}`);
  }
};

export default connectDB;
