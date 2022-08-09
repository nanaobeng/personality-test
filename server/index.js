const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Question = require("./models/Question");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const sequelize = require("./database/db");

app.use(cors());
app.use(express.json());

const main = async () => {
  const authRoutes = require("./routes/auth");
  const questionRoutes = require("./routes/question");

  app.use(questionRoutes);
  app.use(authRoutes);

  await sequelize.sync({ alter: true });
  console.log("All models were synchronized successfully.");

  const newQuestion = await Question.create({
    description: "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
    option_a: "Don’t dare to interrupt them",
    option_b: "Think it’s more important to give them some of your time; work can wait",
    option_c: "Listen, but with only with half an ear",
    option_d: "Interrupt and explain that you are really busy at the moment",
    selection_a: "Introvert",
    selection_b: "Extrovert",
    selection_c: "Extrovert",
    selection_d: "Introvert",
  });

  const newSecondQuestion = await Question.create({
    description: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
    option_a: "Look at your watch every two minutes",
    option_b: "Bubble with inner anger, but keep quiet",
    option_c: "Explain to other equally impatient people in the room that the doctor is always running late",
    option_d: "Complain in a loud voice, while tapping your foot impatiently",
    selection_a: "Introvert",
    selection_b: "Extrovert",
    selection_c: "Extrovert",
    selection_d: "Introvert",
  });

  const newThirdQuestion = await Question.create({
    description: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
    option_a: "Don’t dare contradict them",
    option_b: "Think that they are obviously righ",
    option_c: "Defend your own point of view, tooth and nail",
    option_d: "Continuously interrupt your colleagu",
    selection_a: "Introvert",
    selection_b: "Extrovert",
    selection_c: "Extrovert",
    selection_d: "Introvert",
  });

  const newFourthQuestion = await Question.create({
    description: "You are taking part in a guided tour of a museum. You:",
    option_a: "Are a bit too far towards the back so don’t really hear what the guide is saying",
    option_b: "Follow the group without question",
    option_c: "Make sure that everyone is able to hear properly",
    option_d: "Are right up the front, adding your own comments in a loud voice",
    selection_a: "Introvert",
    selection_b: "Introvert",
    selection_c: "Extrovert",
    selection_d: "Extrovert",
  });

  const newFifthQuestion = await Question.create({
    description: "During dinner parties at your home, you have a hard time with people who",
    option_a: "Ask you to tell a story in front of everyone else",
    option_b: "Talk privately between themselves",
    option_c: "Hang around you all evening",
    option_d: "Always drag the conversation back to themselves",
    selection_a: "Introvert",
    selection_b: "Extrovert",
    selection_c: "Extrovert",
    selection_d: "Introvert",
  });


  const salt = await bcrypt.genSalt(10);

  const bcryptPassword = await bcrypt.hash('test123', salt);

  const newUser = await User.create({
    email: "test@test.com",
    password: bcryptPassword,
  });


  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
