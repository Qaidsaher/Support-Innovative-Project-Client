// Profile.js
import React, { useState } from "react";

const Profile = () => {
  const initialProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "This is a short bio about John.",
  };

  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    // Simulate asynchronous update
    setTimeout(() => {
      setLoading(false);
      setEditMode(false);
      setMessage("Profile updated successfully.");
    }, 3000);
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      setLoading(true);
      setError("");
      setMessage("");
      // Simulate asynchronous delete
      setTimeout(() => {
        setLoading(false);
        alert("Account deleted. Redirecting to sign in page.");
        // Here you could clear auth state and redirect
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="max-w-lg w-full  shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-green-100 text-green-600 p-2 rounded mb-4">
            {message}
          </div>
        )}
        {loading ? (
          <div className="flex justify-center items-center">
            <svg className="animate-spin h-8 w-8 text-indigo-600" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            {editMode ? (
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Bio</label>
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <strong>Name:</strong> {profile.name}
                </div>
                <div>
                  <strong>Email:</strong> {profile.email}
                </div>
                <div>
                  <strong>Bio:</strong> {profile.bio}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setEditMode(true)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Profile;
