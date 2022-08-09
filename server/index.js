const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Question = require("./models/Question");

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



  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
