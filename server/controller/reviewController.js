import prisma from "../prisma/prisma.js";

export async function AddReview(req, res) {
  const { body, userId } = req;
  try {
    const review = await prisma.review.create({
      data: {
        desc: body.desc,
        userId: userId,
        gigId: body.gigId,
        star: parseInt(body.star),
      },
      include: {
        user: {
          select: {
            name: true,
            img: true,
            countryName: true,
          },
        },
      },
    });

    await prisma.gig.update({
      where: {
        id: body.gigId,
      },
      data: {
        totalStars: {
          increment: parseInt(body.star),
        },
        starNumber: {
          increment: 1,
        },
      },
    });
    return res.status(201).json(review);
  } catch (error) {
    return res.status(400).json(error);
  }
}
