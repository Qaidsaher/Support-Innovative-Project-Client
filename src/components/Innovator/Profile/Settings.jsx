// src/components/Innovator/Profile/Settings.js
import React from "react";

const Settings = () => {
  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      // Implement your account deletion logic here.
      alert("Account deleted.");
    }
  };

  return (
    <div className="p-6 ">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Settings</h2>
      <p className="text-gray-700 mb-4">
        Manage your account settings and privacy preferences here.
      </p>
      {/* Add any additional settings fields or controls as needed */}
      <div className="mt-8 flex items-center justify-center space-x-4 w-full">
        <button
          onClick={handleDeleteAccount}
          className=" bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
