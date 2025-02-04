import React from "react";

const InputField = ({ label, type, name, placeholder, value, onChange, error }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 font-semibold">{label}</label>}
      <input
        type={type}
        name={name} // ✅ Ensure name is set
        placeholder={placeholder}
        value={value}
        onChange={onChange} // ✅ Ensure it updates correctly
        className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:outline-none focus:ring-blue-500 border border-gray-300"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
