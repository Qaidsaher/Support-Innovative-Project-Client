// src/components/Admin/DashboardSummary.js
import React from "react";

const DashboardSummary = () => {
  // Dummy data; replace with real stats as needed.
  const stats = [
    { label: "Investors", value: 25 },
    { label: "Innovators", value: 40 },
    { label: "Innovations", value: 60 },
    { label: "Notifications", value: 8 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold text-red-600">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardSummary;
