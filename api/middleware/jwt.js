import jwt from "jsonwebtoken";

// Function to handle error responses
const handleError = (res, statusCode, message) => {
  return res.status(statusCode).json({ error: message });
};

// Middleware to verify token
export const verifyToken = (req, res, next) => {
  const token = req.cookies.fiverrToken; // Access cookies from the request object

  // If token is not present, return 401 unauthorized error
  if (!token) {
    return handleError(res, 401, "You are not authenticated");
  }

  // Verify the token using jwt library
  jwt.verify(token, process.env.JWT, (err, payload) => {
    if (err) {
      // If token is not valid, return 403 forbidden error
      return handleError(res, 403, "Token not valid");
    }

    // Set userId and isSeller in the request object for further use
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
