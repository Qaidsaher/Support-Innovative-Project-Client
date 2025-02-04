// src/pages/adminPages/Dashboard.js
import React from "react";
import Navbar from "../../components/Admin/Navbar";
import DashboardSummary from "../../components/Admin/DashboardSummary";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Admin Dashboard
        </h1>
        <DashboardSummary />
      </section>
    </div>
  );
};

export default Dashboard;
