import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const token = req.cookies.fiverrClone;
  if (!token) return res.status(401).json("No token found");
  jwt.verify(
    token,
    "ghfpifjfjgijuvhosdkdjdkdposdkisjsdososjkdjdloklcjclcjkclcjkcl",
    (err, payload) => {
      if (err) return res.status(401).json("Token Not valid");

      req.userId = payload.id;
      req.isSeller = payload.isSeller;
      next();
    }
  );
}
