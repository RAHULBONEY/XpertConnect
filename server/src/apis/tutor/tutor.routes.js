const { Router } = require("express");
const {
  getMyProfile,
  updateMyProfile,
  getAllTutors,
  getTutorById,
} = require("./tutor.controller");
const { protect, restrictTo } = require("../../middleware/authMiddleware");

const router = Router();

router.get("/", getAllTutors);
//GET /api/tutr/:userId
router.get("/:userId", getTutorById);
router
  .route("/profile")
  .get(protect, restrictTo("TUTOR"), getMyProfile)
  .post(protect, restrictTo("TUTOR"), updateMyProfile);

module.exports = router;
