import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import BrowseExpertsPage from "./pages/BrowseExpertsPage.jsx";
import TutorDashboard from "./pages/TutorDashboard.jsx";

import TutorPublicProfilePage from "./pages/TutorPublicProfile.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* --- Protected Routes --- */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/browse"
          element={
            <ProtectedRoute>
              <BrowseExpertsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tutor/:userId"
          element={
            <ProtectedRoute>
              <TutorPublicProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              {user?.role === "TUTOR" ? (
                <TutorDashboard />
              ) : (
                <Navigate to="/home" />
              )}
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
