import { Schema, model } from "mongoose";

const conversationSchema = new Schema(
  {
    id: { type: String, required: true },
    sellerId: { type: String, required: true },
    buyerId: { type: String, required: true },
    lastMessage: { type: String, required: false },
    readBySeller: { type: Boolean, default: false },
    readByBuyer: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Conversation = model("Conversation", conversationSchema);

export default Conversation;
