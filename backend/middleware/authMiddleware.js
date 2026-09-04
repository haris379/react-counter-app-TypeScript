import jwt from "jsonwebtoken";
import User from "../model/User.js";

const authMiddle = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "No token Provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRE_KEY);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Please Login to continue",
    });
  }
};

export default authMiddle;
