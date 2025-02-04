// src/pages/innovatorPages/MyProfile.js
import React, { useState } from "react";
import Navbar from "../../components/Innovator/Navbar";
import ProfileView from "../../components/Innovator/Profile/ProfileView";
import EditProfile from "../../components/Innovator/Profile/EditProfile";
import Settings from "../../components/Innovator/Profile/Settings";
import Notifications from "../../components/Innovator/Profile/Notifications";
import Footer from "../../components/Innovator/Footer";

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <ProfileView />;
      case "edit":
        return <EditProfile />;
      case "settings":
        return <Settings />;
      case "notifications":
        return <Notifications />;
      default:
        return <ProfileView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <nav className="w-full md:w-1/4 bg-white shadow-md rounded-md p-6 mb-8 md:mb-0 md:h-[600px] md:overflow-y-auto scrollbar-thin smooth-scroll">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full text-left font-semibold px-4 py-2 rounded-md transition ${
                    activeTab === "overview"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("edit")}
                  className={`w-full text-left font-semibold px-4 py-2 rounded-lg transition ${
                    activeTab === "edit"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Edit Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full text-left font-semibold px-4 py-2 rounded-lg transition ${
                    activeTab === "settings"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Settings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full text-left font-semibold px-4 py-2 rounded-lg transition ${
                    activeTab === "notifications"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Notifications
                </button>
              </li>
            </ul>
          </nav>
          {/* Main Content Area */}
          <main className="w-full md:w-3/4 bg-white shadow-md rounded-md p-6 md:h-[600px] md:overflow-y-auto scrollbar-thin smooth-scroll">
            {renderContent()}
          </main>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MyProfile;
