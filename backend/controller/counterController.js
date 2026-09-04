import Counter from "../model/Counter.js";

export const addCounter = async (req, res) => {
  try {
    const counter = await Counter.create({
      value: 0,
      user: req.user._id,
    });
    res.status(200).json({ message: "Counter created Successfully", counter });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error", error });
  }
};
