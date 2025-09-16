const { Router } = require("express");
const {
  getMyProfile,
  updateMyProfile,
  getAllTutors,
  getTutorById,
} = require("./tutor.controller");
const { protect, restrictTo } = require("../../middleware/authMiddleware");

const router = Router();

// These routes are protected. A user must be logged in.
// And they must have the role of 'TUTOR'.
router.get("/", getAllTutors);
router.get("/:userId", getTutorById);
router
  .route("/profile")
  .get(protect, restrictTo("TUTOR"), getMyProfile)
  .post(protect, restrictTo("TUTOR"), updateMyProfile);

module.exports = router;
