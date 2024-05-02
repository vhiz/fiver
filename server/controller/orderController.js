import prisma from "../prisma/prisma.js";

export async function GetOrders(req, res) {
  try {
    if (req.isSeller) {
      const orders = await prisma.order.findMany({
        where: {
          sellerId: req.userId,
        },
        include: {
          gig: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      });
      return res.status(200).json(orders);
    } else {
      const orders = await prisma.order.findMany({
        where: {
          userId: req.userId,
        },
        include: {
          gig: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      });
      return res.status(200).json(orders);
    }
  } catch (error) {
    return res.status(400).json("Something went wrong");
  }
}
export async function CreateOrder(req, res) {
  try {
    if (req.isSeller)
      return res.status(405).json("Seller can not create an order");
    const order = await prisma.order.create({
      data: {
        ...req.body,
        userId: req.userId,
      },
    });
    return res.status(201).json(order);
  } catch (error) {
    return res.status(400).json("Something went wrong");
  }
}
