const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  forgotPassword,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
// Protected route to get current user
router.get("/me", protect, getMe);

module.exports = router;
