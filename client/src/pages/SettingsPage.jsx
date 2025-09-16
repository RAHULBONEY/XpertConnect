import React from "react";
import Layout from "../components/Layout.jsx";
import "../styles/Dashboard.css";

const SettingsPage = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Account Settings</h1>
          <p>Manage your account details and preferences.</p>
        </header>
        <main className="dashboard-content">
          <div className="dashboard-card">
            <h2>Profile Information</h2>
            <p>Settings form will be here. (Coming soon!)</p>
          </div>
          <div className="dashboard-card">
            <h2>Change Password</h2>
            <p>Password change form will be here. (Coming soon!)</p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default SettingsPage;
