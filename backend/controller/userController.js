import User from "../model/User.js";

// Get all Users
export const getAllUser = async (req, res) => {
  try {
    const Users = await User.find();
    if (Users.length === 0) {
      res.status(200).json({ message: "No User Registered", Users });
    }
    res.status(200).json({ message: "All Users Fetched", Users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
