import Counter from "../model/Counter.js";

export const getCounters = async (req, res) => {
  try {
    const counters = await Counter.find({
      user: req.user.id,
    });
    res.status(200).json({ message: "Counter Fetched Successfully", counters });
  } catch (error) {
    res.status(500).json({ message: "Error Fetching Counters", error });
  }
};

export const addCounter = async (req, res) => {
  try {
    const counter = await Counter.create({
      value: 0,
      user: req.user._id,
    });
    res.status(200).json({ message: "Counter created Successfully", counter });
  } catch (error) {
    res.status(500).json({ message: "Error Getting Counter", error });
  }
};

export const deleteCounter = async (req, res) => {
  try {
    const { id } = req.params;

    await Counter.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    res.status(200).json({ message: "Counter deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Deleting Counter", error });
  }
};
