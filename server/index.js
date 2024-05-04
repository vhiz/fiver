import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import gigRoute from "./routes/gigRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import conversationRoute from "./routes/conversationRoute.js";
import orderRoute from "./routes/orderRoute.js";
import { app, server } from "./routes/socket.js";

app.use(helmet());
app.use(cookieParser());
app.use(cors({ origin: [process.env.FRONTEND], credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/gig", gigRoute);
app.use("/api/review", reviewRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/orders", orderRoute);

app.use("*", (req, res) => {
  return res.status(404).json("Not found");
});

const Port = process.env.PORT || 3001;
server.listen(Port, () => {
  console.log("Sever running on " + Port);
});
