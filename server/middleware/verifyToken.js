import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const token = req.cookies.fiverrClone;
  if (!token) return res.status(401).json("Not Authorized");

  jwt.verify(token, process.env.TOKEN, (err, payload) => {
    if (err) return res.status(401).json("Token Not valid");

    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
}
