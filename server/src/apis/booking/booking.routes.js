const { Router } = require("express");
const { createBooking } = require("./booking.controller");
const { protect, restrictTo } = require("../../middleware/authMiddleware");

const router = Router();

// This route is protected. A user must be logged in.
// We also restrict it to 'ASPIRANT' to ensure only they can create bookings.
router.post("/", protect, restrictTo("ASPIRANT"), createBooking);

module.exports = router;
