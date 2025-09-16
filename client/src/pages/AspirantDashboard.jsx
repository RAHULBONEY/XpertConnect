import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Dashboard.css";

const AspirantDashboard = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/tutor");
        setTutors(data);
      } catch (error) {
        console.error("Failed to fetch tutors", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, Aspirant!</h1>
        <p>Find the expert you need to achieve your goals.</p>
      </header>
      <main className="dashboard-content">
        <div className="dashboard-card">
          <h2>Find an Expert (LLM Integration)</h2>
          <p>
            Describe your problem, and our AI will match you with the perfect
            expert. (Coming soon!)
          </p>
          <textarea
            className="llm-input"
            placeholder="e.g., 'I need help debugging a React component...'"
          ></textarea>
          <button className="submit-button">Find Match</button>
        </div>
        <div className="dashboard-card">
          <h2>Browse Available Experts</h2>
          {loading ? (
            <p>Loading experts...</p>
          ) : (
            <div className="tutor-list">
              {tutors.length > 0 ? (
                tutors.map((tutor) => (
                  <div key={tutor.id} className="tutor-card">
                    <img
                      src={`https://placehold.co/64x64/E0E7FF/4338CA?text=${tutor.user.name.charAt(
                        0
                      )}`}
                      alt={`${tutor.user.name}'s avatar`}
                      className="tutor-avatar"
                    />
                    <div className="tutor-info">
                      <h3 className="tutor-name">{tutor.user.name}</h3>
                      <p className="tutor-headline">{tutor.headline}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No tutors have created a profile yet.</p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AspirantDashboard;
