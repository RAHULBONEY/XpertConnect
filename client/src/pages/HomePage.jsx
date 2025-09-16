import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import AspirantDashboard from "./AspirantDashboard.jsx";
import TutorDashboard from "./TutorDashboard.jsx";
import Layout from "../components/Layout.jsx";

const HomePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      {user.role === "TUTOR" ? <TutorDashboard /> : <AspirantDashboard />}
    </Layout>
  );
};

export default HomePage;
