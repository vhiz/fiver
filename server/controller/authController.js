import prisma from "../prisma/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function Register(req, res) {
  try {
    const {
      name,
      email,
      password,
      img,
      phone,
      desc,
      countryName,
      countryFlag,
    } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const userExist = await prisma.user.findUnique({
      where: {
        name: name.toLowerCase(),
      },
    });
    const emailExist = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (userExist || emailExist)
      return res.status(409).json("User Already Exists");

    const user = await prisma.user.create({
      data: {
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        img,
        phone,
        desc,
        password: hashed,
        countryName,
        countryFlag,
      },
      select: {
        name: true,
        email: true,
        img: true,
        countryName: true,
        countryFlag: true,
        phone: true,
        desc: true,
      },
    });
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json("Something went wrong");
  }
}

export async function Login(req, res) {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });
    if (!user) return res.status(404).json("user not found");

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) return res.status(409).json("Invalid credentials");
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

export async function Logout(req, res) {
  try {
    return res.clearCookie("fiverrClone").status(204).end();
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
