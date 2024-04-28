import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

import authRoute from "./routes/authRoute.js";

app.use(express.json());

app.use(cors({ origin: ["http://localhost:5173"], credentials: true })); //
app.use(helmet());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.use("*", (req, res) => {
  return res.status(404).json("Not found");
});

const Port = process.env.PORT || 3001;
app.listen(Port, () => {
  console.log("Sever running on " + Port);
});
