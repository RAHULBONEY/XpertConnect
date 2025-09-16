const { Router } = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
} = require("./auth.controller");

const router = Router();

//POST /api/auth/register
router.post("/register", registerUser);
//POST /api/auth/login
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);

module.exports = router;
