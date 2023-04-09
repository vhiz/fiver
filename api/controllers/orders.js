import Gig from "../model/Gig.js";
import Order from "../model/Order.js";
import { Stripe } from "stripe";

//test
// export const createOrder = async (req, res) => {
//   try {
//     const gig = await Gig.findById(req.params.gigId).select(
//       "cover title userId price"
//     );

//     if (!gig) {
//       return res.status(404).json({ message: "Gig not found" });
//     }

//     const order = new Order({
//       gigId: gig._id,
//       img: gig.cover,
//       title: gig.title,
//       buyerId: req.userId,
//       sellerId: gig.userId,
//       price: gig.price,
//       payment_intent: "temp",
//     });

//     await order.save();

//     res.status(201).json({ message: "Order created successfully" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

export const getOrders = async (req, res) => {
  try {
    const query = req.isSeller
      ? { sellerId: req.userId, isCompleted: true }
      : { buyerId: req.userId, isCompleted: true };

    const orders = await Order.find(query).lean().exec();

    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const intent = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE);
  try {
    const gig = await Gig.findById(req.params.id);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: gig.price * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    const order = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: paymentIntent.id,
    });

    await order.save();

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

export const confirm = async (req, res) => {
  try {
    const { payment_intent } = req.body;

    const order = await Order.findOneAndUpdate(
      { payment_intent },
      { $set: { isCompleted: true } },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    await Gig.findByIdAndUpdate(order.gigId, { $inc: { sales: 1 } });

    return res.status(200).json({ message: "Order has been confirmed", order });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
