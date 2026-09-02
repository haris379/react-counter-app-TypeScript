import User from "../model/User.js";


// Get all Users
export const getAllUser = async (req, res) => {
  try {
    const Users = await User.find();

    res.status(200).json({ message: "All Users Fetched Successfully", Users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
