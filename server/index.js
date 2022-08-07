const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./database/db");

app.use(cors());
app.use(express.json());

const main = async () => {
  const authRoutes = require("./routes/auth");
  const questionRoutes = require("./routes/question");

  app.use(questionRoutes);
  app.use(authRoutes);

  sequelize.sync({ alter: true });
  console.log("All models were synchronized successfully.");
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
