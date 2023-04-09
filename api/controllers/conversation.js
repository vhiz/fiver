import Conversation from "../model/Conversation.js";

export const createConversation = async (req, res) => {
  try {
    const { isSeller, userId, body } = req;
    const { to } = body;

    if (!to || typeof isSeller !== "boolean" || !userId) {
      return res.status(400).json({ error: "Invalid request parameters" });
    }

    const conversationId = isSeller ? userId + to : to + userId;
    const sellerId = isSeller ? userId : to;
    const buyerId = isSeller ? to : userId;
    const readBySeller = isSeller;
    const readByBuyer = !isSeller;

    await Conversation.create({
      id: conversationId,
      sellerId,
      buyerId,
      readBySeller,
      readByBuyer,
    });

    return res
      .status(201)
      .json({ message: "Conversation created successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create conversation" });
  }
};

export const getConversation = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Invalid conversation ID" });
    }

    const conversation = await Conversation.findOne({ id }).lean();

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve conversation" });
  }
};

export const getConversations = async (req, res) => {
  try {
    const { isSeller, userId } = req;

    if (!userId) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const query = isSeller ? { sellerId: userId } : { buyerId: userId };

    const conversations = await Conversation.find(query)
      .lean()
      .sort({ updatedAt: -1 });

    return res.status(200).json(conversations);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve conversations" });
  }
};

export const updateConversation = async (req, res) => {
  try {
    const { params, isSeller } = req;
    const update = await Conversation.findOneAndUpdate(
      { id: params.id },
      {
        $set: {
          //   readBySeller: isSeller,
          //   readByBuyer: !isSeller,
          ...(isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );

    if (update) {
      res.status(200).json(update);
    } else {
      res.status(404).json({ error: "Conversation not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
