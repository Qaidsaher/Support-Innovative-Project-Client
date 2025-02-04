// src/pages/adminPages/ManageInnovators.js
import React from "react";
import Navbar from "../../components/Admin/Navbar";
import ManageInnovators from "../../components/Admin/ManageInnovators";

const ManageInnovatorsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="max-w-7xl mx-auto py-16 px-4">
        <ManageInnovators />
      </section>
    </div>
  );
};

export default ManageInnovatorsPage;
