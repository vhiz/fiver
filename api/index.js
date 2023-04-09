import express from "express";
import cookieParser from "cookie-parser";
import { connect } from "mongoose";
import helmet from "helmet";
import cors from "cors";
import "dotenv/config";

// Import routes
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/review.js";
import messageRoute from "./routes/messages.js";
import ordersRoute from "./routes/orders.js";
import gigRoute from "./routes/gig.js";
import conversationsRoute from "./routes/conversation.js";

// Initialize Express app
const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN, credentials: true }));

// Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/messages", messageRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/conversations", conversationsRoute);

// MongoDB connection
const db = async () => {
  try {
    await connect(process.env.MONGODB_URL);
    console.log(`Connected to MongoDB`);
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit the application with an error code
  }
};
db();

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
