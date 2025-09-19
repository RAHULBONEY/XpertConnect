import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout.jsx";
import BookingModal from "../components/BookingModal.jsx";
import SuccessPopup from "../components/SuccessPopup.jsx";
import "../styles/TutorPublicProfile.css";

const TutorPublicProfilePage = () => {
  const { userId } = useParams();
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (userId) {
      const fetchTutor = async () => {
        try {
          setLoading(true);
          setError("");
          const { data } = await axios.get(
            `http://localhost:8000/api/tutor/${userId}`
          );
          setTutor(data);
        } catch (err) {
          setError(
            "Tutor not found or there was an error loading the profile."
          );
          console.error("Fetch Tutor Error:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchTutor();
    }
  }, [userId]);

  if (loading) {
    return (
      <Layout>
        <div className="profile-container">
          <p>Loading profile...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="profile-container">
          <p className="error-message">{error}</p>
        </div>
      </Layout>
    );
  }

  if (!tutor || !tutor.user) {
    return (
      <Layout>
        <div className="profile-container">
          <p>Tutor data is incomplete or could not be loaded.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {isBookingModalOpen && (
        <BookingModal
          tutor={tutor}
          onClose={() => setIsBookingModalOpen(false)}
          onBookingSuccess={() => setShowSuccessPopup(true)}
        />
      )}
      {showSuccessPopup && (
        <SuccessPopup
          title="Booking Successful!"
          message="Your session has been requested. The tutor will confirm shortly."
          onConfirm={() => setShowSuccessPopup(false)}
        />
      )}
      <div className="profile-container">
        <header className="profile-header">
          <img
            src={`https://placehold.co/128x128/E0E7FF/4338CA?text=${tutor.user.name.charAt(
              0
            )}`}
            alt={`${tutor.user.name}'s avatar`}
            className="profile-avatar"
          />
          <div className="profile-header-info">
            <h1 className="profile-name">{tutor.user.name}</h1>
            <p className="profile-headline">{tutor.headline}</p>
            <button
              className="book-session-button"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book a Session
            </button>
          </div>
        </header>

        <section className="profile-section">
          <h2>About Me</h2>
          <p>{tutor.bio}</p>
        </section>

        <section className="profile-section">
          <h2>Specialties</h2>
          <div className="tutor-specialties">
            {tutor.specialties.map((spec) => (
              <span key={spec} className="specialty-tag">
                {spec}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TutorPublicProfilePage;
