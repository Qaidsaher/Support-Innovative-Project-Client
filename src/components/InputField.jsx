import React, { forwardRef } from "react";

const InputField = forwardRef(
  ({ label, classes, type = "text", placeholder }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-gray-700 mb-1 px-2">{label} : </label>
        <input
          ref={ref}
          type={type}
          className={`w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 input-linear-gradient ${classes}`}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export default InputField;
