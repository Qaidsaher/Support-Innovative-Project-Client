// src/pages/innovatorPages/Dashboard.js
import React from "react";
import Navbar from "../../components/Innovator/Navbar";
import Footer from "../../components/Innovator/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Welcome, Innovator!
        </h1>
        <p className="mt-4 text-center text-lg text-gray-600">
          This is your dashboard where you can manage your profile, innovations,
          chat with investors, and view investments.
        </p>
      </section>
      <Footer/>
    </div>
  );
};

export default Dashboard;
