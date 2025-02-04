// src/pages/adminPages/Notifications.js
import React from "react";
import Navbar from "../../components/Admin/Navbar";
import NotificationList from "../../components/Admin/NotificationList";

const NotificationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="max-w-7xl mx-auto py-16 px-4">
        <NotificationList />
      </section>
    </div>
  );
};

export default NotificationsPage;
