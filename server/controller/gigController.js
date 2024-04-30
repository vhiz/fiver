import prisma from "../prisma/prisma.js";

export async function CreateGig(req, res) {
  try {
    const body = req.body;
    if (!req.isSeller) return res.status(409).json("Not Authorized");
    const gig = await prisma.gig.create({
      data: {
        userId: req.userId,
        ...body,
        deliveryTime: parseInt(body.deliveryTime),
        revisionNumber: parseInt(body.revisionNumber),
        price: parseInt(body.price),
      },
    });
    return res.status(201).json(gig);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong");
  }
}
export async function GetGigs(req, res) {
  const query = req.query;
  try {
    const gig = await prisma.gig.findMany({
      where: {
        cat: query.cat || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 10000000000,
        },
        userId: query.userId || undefined,
        desc: { contains: query.desc || undefined, mode: "insensitive" },
      },
      orderBy: {
        [query.sort || "sales"]: "desc",
      },
      include: {
        user: {
          select: {
            name: true,
            countryFlag: true,
            countryName: true,
            img: true,
            phone: true,
          },
        },
      },
    });

    return res.status(200).json(gig);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong");
  }
}
export async function GetGig(req, res) {
  try {
    const gig = await prisma.gig.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        user: {
          select: {
            name: true,
            img: true,
            countryName: true,
            createdAt: true,
            desc: true,
            phone: true,
            Gig: true,
          },
        },
        Review: {
          include: {
            user: {
              select: {
                name: true,
                countryName: true,
                img: true,
              },
            },
          },
          orderBy: {
            createdAt: "asc",
          },
        },
        Liked: {
          select: {
            userId: true,
          },
        },
      },
    });
    if (!gig) return res.status(404).json("Notfound");
    return res.status(200).json(gig);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong");
  }
}
export async function DeleteGig(req, res) {
  try {
    const gigIds = req.body.gigIds;
    await Promise.all(
      gigIds.map(async (gigId) => {
        await prisma.gig.delete({
          where: {
            id: gigId,
          },
        });
      })
    );
    return res.status(200).json("deleted");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong");
  }
}
export async function LikeGig(req, res) {
  const { body, userId } = req;
  const gigId = body.gigId;
  try {
    const like = await prisma.liked.findUnique({
      where: {
        userId_gigId: { userId, gigId },
      },
    });
    if (like) {
      await prisma.liked.delete({
        where: {
          id: like.id,
        },
      });
      return res.status(200).json("Removed");
    } else {
      await prisma.liked.create({
        data: {
          userId,
          gigId: body.gigId,
        },
      });
      return res.status(201).json("Liked Gig");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong");
  }
}

export async function GetUserGigs(req, res) {
  try {
    const userGigs = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
      select: {
        Gig: true,
      },
    });
    const { Gig, ...other } = userGigs;
    return res.status(200).json(Gig);
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
}
