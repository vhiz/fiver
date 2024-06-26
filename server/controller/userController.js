import prisma from "../prisma/prisma.js";
import jwt from "jsonwebtoken";

export async function Seller(req, res) {
  try {
    const { userId, body } = req;
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        desc: body.desc,
        isSeller: body.isSeller,
      },
    });
    const { password, ...others } = user;
    const token = jwt.sign(
      {
        id: user.id,
        isSeller: user.isSeller,
      },
      process.env.TOKEN,
      { expiresIn: "1d" }
    );
    return res
      .cookie("fiverrClone", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json(others);
  } catch (error) {
    console.log(error);
    res.status(400).json("Something went wrong");
  }
}
export async function UpdateUser(req, res) {
  try {
    const { userId, body } = req;

    const filteredBody = Object.keys(body)
      .filter(
        (key) =>
          body[key] !== null && body[key] !== undefined && body[key] !== ""
      )
      .reduce((acc, key) => {
        acc[key] = body[key];
        return acc;
      }, {});

    if (filteredBody.password) {
      const salt = await bcrypt.genSalt(10);
      filteredBody.password = await bcrypt.hash(filteredBody.password, salt);
    }

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...filteredBody,
      },
    });
    const { password, ...others } = user;
    const token = jwt.sign(
      {
        id: user.id,
        isSeller: user.isSeller,
      },
      process.env.TOKEN,
      { expiresIn: "1d" }
    );
    return res
      .cookie("fiverrClone", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json(others);
  } catch (error) {
    console.log(error);
    res.status(400).json("Something went wrong");
  }
}
