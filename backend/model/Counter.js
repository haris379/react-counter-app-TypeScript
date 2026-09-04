import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
  value: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: mongoose.Schema.Types.String,
    ref: "User",
  },
  email: {
    type: mongoose.Schema.Types.String,
    ref: "User",
  },
});

export default mongoose.model("Counter", counterSchema);
