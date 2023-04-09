import User from "../model/User.js";

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (req.userId !== user._id.toString()) {
      return res
        .status(403)
        .json({ error: "You can delete only your account" });
    }

    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(400).json({ error: "Failed to get user" });
  }
};
