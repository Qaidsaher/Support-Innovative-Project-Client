// src/components/Innovator/Profile/ProfileView.js
import React from "react";

const ProfileView = () => {
  // Dummy profile data
  const profile = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    city: "New York",
    education: "Bachelor of Science",
    phone: "+1 555 123456",
    birthday: "1990-01-01",
    photo: "https://via.placeholder.com/150",
  };

  // Array of statistic objects with custom colors (8 items)
  const stats = [
    {
      title: "Messages",
      value: 120,
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Invitations",
      value: 5,
      textColor: "text-green-600",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
    },
    {
      title: "Notifications",
      value: 10,
      textColor: "text-red-600",
      borderColor: "border-red-200",
      bgColor: "bg-red-50",
    },
    {
      title: "Requests",
      value: 3,
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
      bgColor: "bg-orange-50",
    },
    {
      title: "Likes",
      value: 250,
      textColor: "text-pink-600",
      borderColor: "border-pink-200",
      bgColor: "bg-pink-50",
    },
    {
      title: "Followers",
      value: 180,
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
    },
    {
      title: "Comments",
      value: 75,
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
      bgColor: "bg-teal-50",
    },
    {
      title: "Shares",
      value: 32,
      textColor: "text-yellow-600",
      borderColor: "border-yellow-200",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <div className="p-4">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 border-b pb-6">
        <img
          src={profile.photo}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-indigo-600"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-lg text-gray-600">{profile.email}</p>
        </div>
      </div>

      {/* Profile Information */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-800">City:</span> {profile.city}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold text-gray-800">Education:</span> {profile.education}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-800">Phone:</span> {profile.phone}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold text-gray-800">Birthday:</span> {profile.birthday}
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`border ${stat.borderColor} ${stat.bgColor} rounded-lg p-4 text-center`}
          >
            <h3 className="text-xl font-semibold text-gray-800">{stat.title}</h3>
            <p className={`text-3xl font-bold ${stat.textColor} mt-2`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileView;
