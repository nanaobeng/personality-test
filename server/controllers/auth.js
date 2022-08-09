const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: `${email}` } });

    if (user) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);

    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email: email,
      password: bcryptPassword,
    });

    console.log("success");
    return res.json({ success: "Administrator Account Created" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { password,email } = req.body;

  try {
  

    const user = await User.findOne({ where: { email: req.body.email } });
   

    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    const token = jwt.sign(
      { user_id: user.id, email: user.email },
      process.env.jwtSecret
    );
    res.cookie("t", token, { expire: new Date() + 9999 });

    const user_id = user.id;
    const user_email = user.email;
    return res.json({ token, user: { user_id, user_email } });
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({
      error: "Invalid Credentials",
    });
  }
};
