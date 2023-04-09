import Gig from "../model/Gig.js";

export const createGig = async (req, res, next) => {
  const { userId, body: gigData, isSeller } = req;

  if (!isSeller) {
    return res.status(403).json({ error: "Only sellers can create gig" });
  }

  try {
    const savedGig = await Gig.create({ userId, ...gigData });
    return res.status(201).json(savedGig);
  } catch (error) {
    return res.status(400).json({ error: "Some parameters are needed" });
  }
};


export const deleteGig = async (req, res, next) => {
  const {
    params: { id },
    userId,
  } = req;

  try {
    const gig = await Gig.findById(id);
    if (gig.userId !== userId) {
      return res.status(403).json({ error: "You can only delete your gig" });
    }

    await Gig.findByIdAndDelete(id);
    return res.status(200).json({ message: "Gig deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getGigs = async (req, res, next) => {
  const {
    query: { cat, minPrice, maxPrice, search, random, userId, sort },
  } = req;

  try {
    const filters = {
      ...(userId && { userId }),
      ...(cat && { cat }),
      ...((minPrice || maxPrice) && {
        price: {
          ...(minPrice && { $gt: minPrice }),
          ...(maxPrice && { $lt: maxPrice }),
        },
      }),
      ...(search && { title: { $regex: new RegExp(search, "i") } }),
    };

    let gigs;

    if (random) {
      gigs = await Gig.aggregate([{ $sample: { size: 10 } }]);
    } else {
      gigs = await Gig.find(filters);
    }

    return res.status(200).json(
      gigs.sort((a, b) => {
        if (a[sort] < b[sort]) {
          return -1;
        } else if (a[sort] > b[sort]) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const singleGig = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  try {
    const gig = await Gig.findById(id);
    if (!gig) {
      return res.status(404).json({ error: "Gig not found" });
    }

    return res.status(200).json(gig);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
