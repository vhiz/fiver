import prisma from "../prisma/prisma.js";

export async function AddConversation(req, res) {
  try {
    const userId = req.userId;
    const conversation = await prisma.conversation.findMany({
      where: {
        userIds: {
          hasEvery: [req.body.receiverId, userId],
        },
      },
    });
    if (conversation.length > 0) return res.status(409).json("Already created");
    const newChat = await prisma.conversation.create({
      data: {
        userIds: [userId, req.body.receiverId],
      },
    });
    return res.status(200).json(newChat);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong");
  }
}
export async function GetConversations(req, res) {
  try {
    const userId = req.userId;
    const conversations = await prisma.conversation.findMany({
      where: {
        userIds: {
          hasSome: [userId],
        },
      },
    });
    const conversationWithUser = await Promise.all(
      conversations.map(async (conversation) => {
        const receiverId = conversation.userIds.find((id) => id !== userId);
        const receiver = await prisma.user.findUnique({
          where: {
            id: receiverId,
          },
          select: {
            img: true,
            name: true,
            id: true,
            countryName: true,
          },
        });
        return { ...conversation, receiver };
      })
    );
    return res.status(200).json(conversationWithUser);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong");
  }
}
export async function GetConversation(req, res) {
  try {
    const conversation = await prisma.conversation.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(400).json("Something went wrong");
  }
}

export async function AddMessage(req, res) {
  try {
    const userId = req.userId;
    const message = await prisma.message.create({
      data: {
        userId: userId,
        receiverId: req.body.receiverId,
        conversationId: req.body.conversationId,
        text: req.body.text,
      },
    });
    return res.status(200).json(message);
  } catch (error) {
    return res.status(400).json("Something went wrong");
  }
}
