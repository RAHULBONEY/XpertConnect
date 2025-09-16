import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import axios from "axios";
import "../styles/BrowseExperts.css";
import "../styles/Dashboard.css";

const BrowseExpertsPage = () => {
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredTutors = tutors.filter((tutor) => {
    const searchTermLower = searchTerm.toLowerCase();
    const nameMatch = tutor.user.name.toLowerCase().includes(searchTermLower);
    const headlineMatch = tutor.headline
      .toLowerCase()
      .includes(searchTermLower);
    const specialtiesMatch = tutor.specialties.some((spec) =>
      spec.toLowerCase().includes(searchTermLower)
    );
    return nameMatch || headlineMatch || specialtiesMatch;
  });

  return (
    <Layout>
      <div className="browse-container">
        <header className="browse-header">
          <h1>Browse All Experts</h1>
          <p>Find and connect with an expert from our community.</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name, headline, or specialty..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>
        <main className="browse-content">
          {loading ? (
            <p>Loading experts...</p>
          ) : (
            <div className="tutor-grid">
              {filteredTutors.length > 0 ? (
                filteredTutors.map((tutor) => (
                  <Link
                    to={`/tutor/${tutor.userId}`}
                    key={tutor.id}
                    className="tutor-card-link"
                  >
                    <div className="tutor-card">
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
                        <div className="tutor-specialties">
                          {tutor.specialties.map((spec) => (
                            <span key={spec} className="specialty-tag">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No experts found matching your search.</p>
              )}
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default BrowseExpertsPage;
