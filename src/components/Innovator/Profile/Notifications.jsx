// src/components/Innovator/Profile/Notifications.js
import React, { useState } from "react";

const Notifications = () => {
  // Dummy notifications array
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Message Received",
      description: "You have received a new message from Jane.",
      date: "2025-01-10",
    },
    {
      id: 2,
      title: "Profile Update",
      description: "Your profile was viewed 10 times today.",
      date: "2025-01-09",
    },
    {
      id: 3,
      title: "Security Alert",
      description: "New sign-in from an unrecognized device.",
      date: "2025-01-08",
    },
    {
      id: 4,
      title: "Subscription Update",
      description: "Your subscription plan will renew tomorrow.",
      date: "2025-01-07",
    },
    {
      id: 5,
      title: "Reminder",
      description: "Don't forget to check your messages.",
      date: "2025-01-06",
    },
  ]);

  // Define an array of color schemes for the notifications
  const colors = [
    { borderColor: "border-indigo-200", bgColor: "bg-indigo-50", textColor: "text-indigo-800" },
    { borderColor: "border-green-200", bgColor: "bg-green-50", textColor: "text-green-800" },
    { borderColor: "border-red-200", bgColor: "bg-red-50", textColor: "text-red-800" },
    { borderColor: "border-yellow-200", bgColor: "bg-yellow-50", textColor: "text-yellow-800" },
    { borderColor: "border-purple-200", bgColor: "bg-purple-50", textColor: "text-purple-800" },
  ];

  const handleDelete = (id) => {
    // Delete the notification with the given id
    setNotifications((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((note, index) => {
          // Cycle through the colors array based on index
          const color = colors[index % colors.length];
          return (
            <div
              key={note.id}
              className={`flex items-start justify-between border ${color.borderColor} ${color.bgColor} rounded-md p-4 hover:shadow-md transition relative`}
            >
              <div>
                <h3 className={`text-xl font-semibold ${color.textColor}`}>{note.title}</h3>
                <p className="text-gray-600 mt-1">{note.description}</p>
                <span className="text-gray-500 text-sm block mt-2">{note.date}</span>
              </div>
              {/* Delete Icon */}
              <button
                onClick={() => handleDelete(note.id)}
                className="text-red-500 hover:text-red-600 transition ml-1 self-center"
                title="Delete Notification"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V4a2 2 0 012-2h4a2 2 0 012 2v3"
                  />
                </svg>
              </button>
            </div>
          );
        })}
        {notifications.length === 0 && (
          <p className="text-gray-600 text-center">No notifications to show.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
