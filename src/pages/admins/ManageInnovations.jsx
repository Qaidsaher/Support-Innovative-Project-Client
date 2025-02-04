// src/pages/adminPages/ManageInnovations.js
import React from "react";
import Navbar from "../../components/Admin/Navbar";
import ManageInnovations from "../../components/Admin/ManageInnovations";

const ManageInnovationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="max-w-7xl mx-auto py-16 px-4">
        <ManageInnovations />
      </section>
    </div>
  );
};

export default ManageInnovationsPage;
