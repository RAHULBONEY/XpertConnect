const { Router } = require("express");
const { createBooking } = require("./booking.controller");
const { protect, restrictTo } = require("../../middleware/authMiddleware");

const router = Router();

router.post("/", protect, restrictTo("ASPIRANT"), createBooking);

module.exports = router;
