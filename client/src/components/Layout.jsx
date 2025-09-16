import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Link to="/home" className="logo">
            XpertConnect
          </Link>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/home" className="nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/browse" className="nav-link">
            Browse Experts
          </NavLink>
          {user?.role === "TUTOR" && (
            <NavLink to="/profile" className="nav-link">
              My Profile
            </NavLink>
          )}
          <NavLink to="/settings" className="nav-link">
            Settings
          </NavLink>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
