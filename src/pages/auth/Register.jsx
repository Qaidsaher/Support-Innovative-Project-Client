// import React, { useState } from "react";
// import useAuth from "@/hooks/useAuth";
// import InputField from "@/components/UI/InputField";
// import Button from "@/components/UI/Button";
// import { Link } from "react-router-dom";
// import LoadingSpinner from "@/components/UI/LoadingSpinner";
// import { register } from "@/services/authService";
// const Register = () => {
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     education: "",
//     birthdate: "",
//     city: "",
//     isInvestor: false,
//     isInnovator: false,
//     termsAccepted: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear errors on typing
//   };

//   // Form Validation
//   const validate = () => {
//     let newErrors = {};
//     if (!formData.firstName.trim())
//       newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     if (!formData.password.trim()) newErrors.password = "Password is required";
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";
//     if (!formData.termsAccepted)
//       newErrors.termsAccepted = "You must accept the Terms & Conditions";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle Form Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     setLoading(true);

//     setTimeout(async () => {
//       try {
//       const saher =   await register(formData);
//     //   alert(saher)
//         // Mockup API call (Replace with real register API)
//         console.log("Registering user:", formData);
//         await login(formData.email, formData.password);
//       } catch (error) {
//         setErrors({
//           general: error.response?.data?.message || "Registration failed",
//         });
//       } finally {
//         setLoading(false);
//       }
//     }, 3000);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full px-6">
//       <div className="max-w-6xl w-full bg-white shadow-md rounded-md p-8 xl:p-8">
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
//           Create an Account
//         </h2>
//         <p className="text-gray-600 text-center mb-6">
//           Sign up to get started!
//         </p>

//         {errors.general && (
//           <p className="text-red-600 text-center mb-4">{errors.general}</p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <InputField
//               label="First Name"
//               name="firstName"
//               placeholder="Enter first name"
//               value={formData.firstName}
//               onChange={handleChange}
//               error={errors.firstName}
//             />
//             <InputField
//               label="Last Name"
//               name="lastName"
//               placeholder="Enter last name"
//               value={formData.lastName}
//               onChange={handleChange}
//               error={errors.lastName}
//             />
//             <InputField
//               label="Email"
//               name="email"
//               type="email"
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               error={errors.email}
//             />
//             <InputField
//               label="Phone"
//               name="phone"
//               type="tel"
//               placeholder="Enter phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               error={errors.phone}
//             />
//             <InputField
//               label="Education"
//               name="education"
//               placeholder="Enter your education"
//               value={formData.education}
//               onChange={handleChange}
//             />
//             <InputField
//               label="Birthdate"
//               name="birthdate"
//               type="date"
//               value={formData.birthdate}
//               onChange={handleChange}
//             />
//             <InputField
//               label="City"
//               name="city"
//               placeholder="Enter your city"
//               value={formData.city}
//               onChange={handleChange}
//             />
//             <InputField
//               label="Password"
//               name="password"
//               type="password"
//               placeholder="Enter password"
//               value={formData.password}
//               onChange={handleChange}
//               error={errors.password}
//             />
//             <InputField
//               label="Confirm Password"
//               name="confirmPassword"
//               type="password"
//               placeholder="Confirm password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               error={errors.confirmPassword}
//             />
//           </div>

//           {/* Role Selection */}
//           <div className="flex items-center justify-between max-w-[300px]">
          
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 name="isInvestor"
//                 checked={formData.isInvestor}
//                 onChange={handleChange}
//                 className="mr-2 w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
//               />
//               <span className="text-gray-600">Investor</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 name="isInnovator"
//                 checked={formData.isInnovator}
//                 onChange={handleChange}
//                 className="mr-2 w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
//               />
//               <span className="text-gray-600">Innovator</span>
//             </label>
//           </div>

//           {/* Terms & Conditions */}
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               name="termsAccepted"
//               checked={formData.termsAccepted}
//               onChange={handleChange}
//               className="mr-2 w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
//             />
//             <span className="text-gray-600">
//               I agree to the{" "}
//               <a href="#" className="text-indigo-600 hover:underline">
//                 Terms & Conditions
//               </a>
//             </span>
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             text={loading ? <LoadingSpinner color="white" /> : "Register"}
//             variant="indigo"
//             className="w-full"
//             disabled={loading || !formData.termsAccepted}
//           />
//         </form>

//         <div className="text-center mt-6">
//           <span className="text-gray-600">Already have an account? </span>
//           <Link to="/login" className="text-indigo-600 hover:underline">
//             Login here
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import useAuth from "@/hooks/useAuth";
import InputField from "@/components/UI/InputField";
import Button from "@/components/UI/Button";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { register } from "@/services/authService";
import { Link } from "react-router-dom";

const Register = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    education: "",
    birthday: "",
    city: "",
    role: "", // Determines if user is Investor or Innovator
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear errors when typing
  };

  // Detect User Role (Investor or Innovator)
  const handleRoleSelection = (e) => {
    if (e.target.checked) {
      setFormData((prev) => ({ ...prev, role: e.target.name }));
    } else {
      setFormData((prev) => ({ ...prev, role: "" })); // Uncheck both if user deselects
    }
  };

  // Form Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.role) newErrors.role = "Please select your role (Investor or Innovator)";
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the Terms & Conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    setTimeout(async () => {
      try {
        // Send Registration Request
        const registeredUser = await register(formData);
        console.log("Registered successfully:", registeredUser);
        await login(formData.email, formData.password); // Auto login after registration
      } catch (error) {
        setErrors({ general: error.response?.data?.message || "Registration failed" });
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full px-6">
      <div className="max-w-6xl w-full bg-white shadow-md rounded-md p-8 xl:p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create an Account</h2>
        <p className="text-gray-600 text-center mb-6">Sign up to get started!</p>

        {errors.general && <p className="text-red-600 text-center mb-4">{errors.general}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InputField
              label="First Name"
              name="first_name"
              placeholder="Enter first name"
              value={formData.first_name}
              onChange={handleChange}
              error={errors.first_name}
            />
            <InputField
              label="Last Name"
              name="last_name"
              placeholder="Enter last name"
              value={formData.last_name}
              onChange={handleChange}
              error={errors.last_name}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              label="Phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            <InputField
              label="Education"
              name="education"
              placeholder="Enter your education"
              value={formData.education}
              onChange={handleChange}
            />
            <InputField
              label="Birthday"
              name="birthday"
              type="date"
              value={formData.birthday}
              onChange={handleChange}
            />
            <InputField
              label="City"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </div>

          {/* Role Selection */}
          <div className="flex items-center justify-between max-w-[300px]">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="investor"
                checked={formData.role === "investor"}
                onChange={handleRoleSelection}
                className="mr-2 w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="text-gray-600">Investor</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="innovator"
                checked={formData.role === "innovator"}
                onChange={handleRoleSelection}
                className="mr-2 w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="text-gray-600">Innovator</span>
            </label>
          </div>
          {errors.role && <p className="text-red-600 text-sm">{errors.role}</p>}

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2 w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            text={loading ? <LoadingSpinner color="white" /> : "Register"}
            variant="indigo"
            className="w-full"
            disabled={loading || !formData.termsAccepted}
          />
        </form>

        <div className="text-center mt-6">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
