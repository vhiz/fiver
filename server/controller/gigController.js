import prisma from "../prisma/prisma.js";

export async function CreateGig(req, res) {
  try {
    const body = req.body;
    if (!req.isSeller) return res.status(409).json("Not Authorized");
    const gig = await prisma.gig.create({
      data: {
        userId: req.userId,
        ...body,
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
        },
        Liked: {
          select: {
            userId: true,
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
export async function DeleteGig(req, res) {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong");
  }
}
