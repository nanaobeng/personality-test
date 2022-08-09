const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const formidable = require('formidable');
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

  try {
    let form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
    const { description, option_a, option_b, option_c, option_d , selection_a, selection_b, selection_c, selection_d} = fields;
   
    console.log(fields)
    const question = await Question.findOne({ where: { description: `${description}` } });

    if (question) {
      return res.status(401).json("Question already exists!");
    }
    const newQuestion = await Question.create({
      description: description,
      option_a: option_a,
      option_b: option_b,
      option_c: option_c,
      option_d: option_d,
      selection_a: selection_a,
      selection_b: selection_b,
      selection_c: selection_c,
      selection_d: selection_d,
    });

    console.log("success");
    return res.json({ success: "Question Successfully Created" });
    })
    
  

    

  
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateQuestion = async (req, res) => {
  try {
  

    const { id } = req.params;
  

    let form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
    const { description, option_a, option_b, option_c, option_d , selection_a, selection_b, selection_c, selection_d} = fields;
    console.log(fields)
    console.log(fields)
    const question = await Question.findOne({ where: { id: id } });
    if (!question) {
      return res.status(401).json(`Question not Found!`);
    }
    await Question.update(
      {
        description: description,
    
        option_a: option_a,
        option_b: option_b,
        option_c: option_c,
        option_d: option_d,
        selection_a: selection_a,
        selection_b: selection_b,
        selection_c: selection_c,
        selection_d: selection_d,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.json("Question was updated!");
    })

 

  

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


exports.getQuestion = async (req, res) => {
  try {
  
    const { id } = req.params;



    const question = await Question.findOne({ where: { id: id } });

    if (question) {
      return res.status(200).json(question);

 
    } else {
      return res.status(401).json({ error: `Question not Found!` });
    }
  } catch (err) {
    console.log(err.message);
  }
};


