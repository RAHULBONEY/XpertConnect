const { PrismaClient } = require("../../generated/client");
const { get } = require("./tutor.routes");
const prisma = new PrismaClient();

// Controller to get or create a tutor's profile
const getMyProfile = async (req, res) => {
  try {
    const profile = await prisma.tutorProfile.findUnique({
      where: { userId: req.user.id },
    });

    if (!profile) {
      return res
        .status(404)
        .json({ message: "Profile not found. Please create one." });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Controller to create or update a tutor's profile
const updateMyProfile = async (req, res) => {
  const { headline, bio, hourlyRate, specialties } = req.body;

  try {
    const updatedProfile = await prisma.tutorProfile.upsert({
      where: { userId: req.user.id },
      update: { headline, bio, hourlyRate, specialties },
      create: {
        userId: req.user.id,
        headline,
        bio,
        hourlyRate,
        specialties,
      },
    });
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const getAllTutors = async (req, res) => {
  try {
    const tutors = await prisma.tutorProfile.findMany({
      // Include the user's name from the related User table
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    res.status(200).json(tutors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const getTutorById = async (req, res) => {
  const { userId } = req.params;
  try {
    const tutor = await prisma.tutorProfile.findUnique({
      where: { userId: userId },
      include: {
        user: {
          select: {
            name: true,
            email: true, // You might want to include email for a booking form
          },
        },
      },
    });

    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }

    res.status(200).json(tutor);
  } catch (error) {
    console.error(`Failed to fetch tutor ${userId}`, error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getMyProfile,
  updateMyProfile,
  getAllTutors,
  getTutorById,
};
