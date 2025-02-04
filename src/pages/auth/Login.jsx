import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import InputField from "@/components/UI/InputField";
import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";
import { Link } from "react-router-dom";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const Login = () => {
  const { login,token,role } = useAuth();
  const navigate = useNavigate(); // ✅ Hook to handle navigation
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // ✅ Remember Me state
  useEffect(() => {
    if (token) {
      alert(token)
      // navigate("/dashboard"); // Redirect to Dashboard
    }
  }, [token, navigate]);
  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear errors
  };

  // Handle Remember Me
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  // Form Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
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
        await login(formData.email, formData.password);
        if (rememberMe) {
          localStorage.setItem("rememberMe", formData.email); // ✅ Store email in localStorage
        } else {
          localStorage.removeItem("rememberMe");
        }
      } catch (error) {
        setErrors({ general: error.response?.data?.message || "Login failed" });
      } finally {
        setLoading(false);
      }
    }, 3000); // ✅ Simulate delay for 3 seconds
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
      <Card
        title="Welcome Back!"
        description="Please enter your credentials to log in."
      >
        {errors.general && (
          <p className="text-red-600 text-center">{errors.general}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          {/* ✅ Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMe}
              className="mr-2 w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="rememberMe"
              className="text-gray-600 cursor-pointer"
            >
              Remember Me
            </label>
          </div>
          {/* ✅ Submit Button with Spinner */}
          <Button
            type="submit"
            text={loading ? <LoadingSpinner color="white" /> : "Login"}
            variant="indigo"
            className="w-full"
            disabled={loading}
          />
        </form>
        <div className="text-center mt-4">
          <Link
            to="/forgot-password"
            className="text-indigo-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-2">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/register" className="text-indigo-600 hover:underline">
            Sign up here
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
