import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SuccessPopup from "../components/SuccessPopup.jsx";
import "../styles/SignupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "ASPIRANT",
  });
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  // This function handles changes for ALL inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:8000/api/auth/register", formData);
      setShowSuccess(true);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred.";
      setError(errorMessage);
    }
  };

  return (
    <div className="signup-page">
      {showSuccess && (
        <SuccessPopup
          title="Registration Successful!"
          message="Your account has been created. Please log in."
          onConfirm={() => navigate("/login")}
        />
      )}
      <div className="signup-container">
        <h2 className="signup-title">Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* This is the corrected password input block */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange} // This line is crucial
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <div className="role-selector">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="ASPIRANT"
                  checked={formData.role === "ASPIRANT"}
                  onChange={handleChange}
                />
                Aspirant (I'm looking for an expert)
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="TUTOR"
                  checked={formData.role === "TUTOR"}
                  onChange={handleChange}
                />
                Tutor (I am an expert)
              </label>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Create Account
          </button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login" className="link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
