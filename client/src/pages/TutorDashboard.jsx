import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";
import "../styles/Dashboard.css";
import SuccessPopup from "../components/SuccessPopup.jsx";

const TutorDashboard = () => {
  const [profile, setProfile] = useState({
    headline: "",
    bio: "",
    hourlyRate: "",
    specialties: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/tutor/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProfile({
          headline: data.headline || "",
          bio: data.bio || "",
          hourlyRate: data.hourlyRate || "",
          specialties: data.specialties.join(", "),
        });
      } catch (error) {
        console.log("No profile found, please create one.");
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/tutor/profile",
        { ...profile, hourlyRate: parseInt(profile.hourlyRate, 10) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setShowSuccess(true);
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  return (
    <div className="dashboard-container">
      {showSuccess && (
        <SuccessPopup
          title="Profile Updated!"
          message="Your profile has been saved successfully."
          onConfirm={() => setShowSuccess(false)}
        />
      )}
      <header className="dashboard-header">
        <h1>Tutor Dashboard</h1>
        <p>Manage your professional profile and availability.</p>
      </header>
      <main className="dashboard-content">
        <div className="dashboard-card">
          <h2>Edit Your Profile</h2>
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="headline" className="form-label">
                Headline
              </label>
              <input
                type="text"
                id="headline"
                name="headline"
                value={profile.headline}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="form-input"
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="hourlyRate" className="form-label">
                Hourly Rate (INR)
              </label>
              <input
                type="number"
                id="hourlyRate"
                name="hourlyRate"
                value={profile.hourlyRate}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="specialties" className="form-label">
                Specialties (comma-separated)
              </label>
              <input
                type="text"
                id="specialties"
                name="specialties"
                value={profile.specialties}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button">
              Save Profile
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard;
