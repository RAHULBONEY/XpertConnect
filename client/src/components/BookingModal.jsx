import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../styles/BookingModal.css";

const BookingModal = ({ tutor, onClose, onBookingSuccess }) => {
  const [sessionDate, setSessionDate] = useState("");
  const [error, setError] = useState("");
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!sessionDate) {
      setError("Please select a date and time for the session.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/booking",
        {
          tutorId: tutor.userId,
          sessionDate: sessionDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Booking created:", response.data);
      onBookingSuccess();
      onClose();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to book session.";
      setError(errorMessage);
      console.error(err);
    }
  };

  const getMinDateTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Book a Session with {tutor.user.name}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="booking-form">
          <p>Select a date and time for your one-on-one session.</p>
          <div className="form-group">
            <label htmlFor="sessionDate" className="form-label">
              Session Date & Time
            </label>
            <input
              id="sessionDate"
              type="datetime-local"
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
              min={getMinDateTime()}
              className="form-input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
