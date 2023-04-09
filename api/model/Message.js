import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    conversationId: { type: String, required: true },
    userId: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = model("Message", messageSchema);

export default Message;
