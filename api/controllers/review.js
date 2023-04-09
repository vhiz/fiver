import Gig from "../model/Gig.js";
import Review from "../model/Review.js";

export const createReview = async (req, res) => {
    
  try {
    if (req.isSeller) {
      return res.status(403).json("Sellers can't create reviews");
    }


    const { gigId, star } = req.body;
    const { userId } = req;

    if (!gigId || !userId || !star) {
      return res.status(400).json("Invalid request data");
    }

    const review = await Review.findOne({ gigId, userId });

    if (review) {
      return res.status(409).json("Review already created");
    }

    await Review.create({ userId, gigId, ...req.body });

    await Gig.findByIdAndUpdate(gigId, {
      $inc: { totalStars: star, starNumber: 1 },
    });

    return res.status(201).json("Review created successfully");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

export const getReview = async (req, res) => {
  try {
    const reviews = await Review.find({ gigId: req.params.id });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const deleteReview = async (req, res) => {};
