const express = require("express");
const router = express.Router();

const {register, login} = require('../controllers/auth');
//authorizeentication

router.post("/register",register);
router.post("/signin",login);


module.exports = router;