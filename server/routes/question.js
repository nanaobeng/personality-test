const express = require("express");
const router = express.Router();
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../utils/authorize");

const {deleteQuestion, getQuestions,  getQuestion, createQuestion, updateQuestion } = require('../controllers/question');


router.get("/questions",getQuestions);
router.post("/question/:id",getQuestion);

// Admin Routes - (Protected)

router.post("/admin/question/create",createQuestion);
router.put("/admin/question/update/:id",updateQuestion);
router.delete("/admin/question/delete/:id",deleteQuestion);



module.exports = router;