import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, requried: true },
    email: { type: String, requried: true },
    password: { type: String, requried: true },
    img: { type: String, requried: false },
    country: { type: String, requried: true },
    phone: { type: Number, requried: false },
    desc: { type: String, requried: false },
    isSeller: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
