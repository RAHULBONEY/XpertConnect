const { PrismaClient } = require("../../generated/client");
const prisma = new PrismaClient();

const createBooking = async (req, res) => {
  const aspirantId = req.user.id;
  const { tutorId, sessionDate } = req.body;

  // Basic validation
  if (!tutorId || !sessionDate) {
    return res
      .status(400)
      .json({ message: "Tutor ID and session date are required." });
  }

  try {
    const tutorUser = await prisma.user.findUnique({ where: { id: tutorId } });
    if (!tutorUser || tutorUser.role !== "TUTOR") {
      return res
        .status(404)
        .json({ message: "The specified tutor does not exist." });
    }

    // Create the booking record
    const newBooking = await prisma.booking.create({
      data: {
        sessionDate: new Date(sessionDate),
        aspirant: { connect: { id: aspirantId } },
        tutor: { connect: { id: tutorId } },
        status: "PENDING", // Default status
      },
    });

    console.log(
      `Kafka Event (Simulated): New booking created - ID ${newBooking.id}`
    );

    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking." });
  }
};

module.exports = {
  createBooking,
};
