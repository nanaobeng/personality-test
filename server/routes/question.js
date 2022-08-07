const express = require("express");
const router = express.Router();
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../utils/authorize");

const { getQuestions, createQuestion, updateQuestion } = require('../controllers/question');


router.get("/questions",getQuestions);

// Admin Routes - (Protected)

router.post("/admin/question/create",authorize,createQuestion);
router.put("/admin/question/update",authorize,updateQuestion);
router.delete("/admin/question/delete",authorize,createQuestion);



module.exports = router;