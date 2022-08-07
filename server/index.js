const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();


app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})