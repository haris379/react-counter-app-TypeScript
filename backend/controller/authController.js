import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ message: "Input All Fields" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashPassword });

    res.status(200).json({ message: "User registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Input All Fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not registered" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRE_KEY, {
      expiresIn: "5h",
    });

    res.status(200).json({
      message: "Login Successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const loginSpecificUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const user = await User.findOne({ _id: id });
    if (!password) {
      return res.status(400).json({ message: "Enter Password" });
    }

    if (!user) {
      return res.status(400).json({ message: "User not registered" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRE_KEY, {
      expiresIn: "5h",
    });

    res.status(200).json({
      message: "Login Successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
