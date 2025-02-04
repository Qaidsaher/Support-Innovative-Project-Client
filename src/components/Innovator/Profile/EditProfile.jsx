// src/components/Innovator/Profile/EditProfile.js
import React, { useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    city: "New York",
    education: "Bachelor of Science",
    password: "",
    photo: "",
    phone: "+1 555 123456",
    birthday: "1990-01-01",
    account_x: "",
    publish_date: "",
  });
  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files && files[0]) {
      setFormData({ ...formData, photo: files[0] });
      setPhotoPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
      // Clear error for that field on change
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    // Add more validations as needed
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validations = validate();
    if (Object.keys(validations).length > 0) {
      setErrors(validations);
      return;
    }
    // Implement your update logic here (e.g., API call)
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 ">Edit Profile</h2>

      {/* Profile Header with Avatar */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-10 border-b pb-6">
        <div className="relative">
          <img
            src={photoPreview || "https://fakeimg.pl/350x200"}
            alt="Avatar"
            className="w-32 h-32 rounded-full object-cover border-2 border-indigo-600 shadow-md"
          />
          <label
            htmlFor="photo"
            className="absolute bottom-0 right-0 bg-indigo-600 text-white rounded-full p-1 cursor-pointer shadow-lg hover:bg-indigo-700 transition"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
              />
            </svg>
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-3xl font-semibold text-gray-900">
            {formData.firstName} {formData.lastName}
          </h3>
          <p className="text-gray-600 text-lg">{formData.email}</p>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.firstName && (
              <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          {/* Last Name */}
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.lastName && (
              <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          {/* City */}
          <div>
            <label className="block text-gray-700 mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Education */}
          <div>
            <label className="block text-gray-700 mb-2">Education</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Birthday */}
          <div>
            <label className="block text-gray-700 mb-2">Birthday</label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Account X */}
          <div>
            <label className="block text-gray-700 mb-2">Account X</label>
            <input
              type="text"
              name="account_x"
              value={formData.account_x}
              onChange={handleChange}
              placeholder="Your account details"
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Publish Date */}
          <div>
            <label className="block text-gray-700 mb-2">Publish Date</label>
            <input
              type="date"
              name="publish_date"
              value={formData.publish_date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-8 rounded-md hover:from-indigo-700 hover:to-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
