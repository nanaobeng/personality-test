const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Question = require("../models/Question");
require("dotenv").config();

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    return res.status(200).json(questions);
  } catch (err) {
    console.error(err.message);
  }
};

// Admin Controllers

exports.createQuestion = async (req, res) => {
  const { description, answer, option_a, option_b, option_c, option_d } =
    req.body;

  try {
    const question = await Question.findOne({ where: { email: `${email}` } });

    if (question) {
      return res.status(401).json("Question already exists!");
    }

    const salt = await bcrypt.genSalt(10);

    const hashedAnswer = await bcrypt.hash(answer, salt);

    const newQuestion = await Question.create({
      description: description,
      answer: hashedAnswer,
      option_a: option_a,
      option_b: option_b,
      option_c: option_c,
      option_d: option_d,
    });

    console.log("success");
    return res.json({ success: "Question Successfully Created" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const { id, description, answer, option_a, option_b, option_c, option_d } =
      req.params;

    const question = await Question.findOne({ where: { id: id } });

    if (question) {
      const hashedAnswer = await bcrypt.hash(answer, salt);
      await Question.update(
        {
          description: description,
          answer: hashedAnswer,
          option_a: option_a,
          option_b: option_b,
          option_c: option_c,
          option_d: option_d,
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.json("Question Successfully Deleted!");
    } else {
      return res.status(401).json({ error: `Question not Found!` });
    }
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await Question.findOne({ where: { id: id } });

    if (question) {
      await Question.destroy({
        where: {
          id: id,
        },
      });

      res.json("Question Successfully Deleted!");
    } else {
      return res.status(401).json({ error: `Question not Found!` });
    }
  } catch (err) {
    console.log(err.message);
  }
};


