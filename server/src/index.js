const express = require("express");
const { PrismaClient } = require("./generated/client");
const cors = require("cors");
const authRoutes = require("./apis/auth/auth.routes");
const tutorRoutes = require("./apis/tutor/tutor.routes");
const bookingRoutes = require("./apis/booking/booking.routes");
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();

app.use(cors()); //  CORS for all routes
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/tutor", tutorRoutes);
app.use("/api/booking", bookingRoutes);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
