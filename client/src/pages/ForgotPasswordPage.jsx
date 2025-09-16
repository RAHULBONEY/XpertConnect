import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/LoginPage.css"; // We can reuse the login styles

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/forgot-password",
        { email }
      );
      setMessage(response.data.message);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred.";
      setError(errorMessage);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Forgot Password</h2>
        <p
          style={{
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Enter your email and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="login-form">
          {message && (
            <p style={{ color: "#10b981", textAlign: "center" }}>{message}</p>
          )}
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Send Reset Link
          </button>
        </form>
        <p className="signup-link">
          <Link to="/login" className="link">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
