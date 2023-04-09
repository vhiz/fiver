import Conversation from "../model/Conversation.js";
import Message from "../model/Message.js";

export const createMessage = async (req, res) => {
  try {
    // Input validation
    const { conversationId, desc } = req.body;
    if (!conversationId || !desc) {
      return res.status(422).json({
        error: "Conversation ID and message description are required",
      });
    }

    // Create a new message
    const message = await Message.create({
      conversationId,
      userId: req.userId,
      desc,
    });

    // Update conversation details
    const update = {
      $set: {
        readByBuyer: !req.isSeller,
        readBySeller: req.isSeller,
        lastMessage: desc,
      },
    };
    const conversation = await Conversation.findOneAndUpdate(
      { id: conversationId },
      update,
      { new: true }
    );

    // Send response
    res.status(201).json(message);
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);

    // Send a meaningful response to the client
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    // Input validation
    const conversationId = req.params.id;
    if (!conversationId) {
      return res.status(400).json({ error: "Conversation ID is required" });
    }

    // Query the database
    const messages = await Message.find({ conversationId });

    // Send response
    res.status(200).json(messages);
  } catch (error) {
    // Send a meaningful response to the client
    res.status(500).json({ error: "Internal server error" });
  }
};
