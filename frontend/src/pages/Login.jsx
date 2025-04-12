import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { ShopContext } from "../Context/ShopContext";
import { toast } from "react-toastify";

const Login = () => {
  const { backendUrl, token, setToken,navigate,setUname } = useContext(ShopContext);
  const [lstate, setLstate] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (lstate === "Login") {
      try {
        const result = await axios.post(`${backendUrl}/api/user/login`, { email, password });
        console.log(result.data);
        if (result.data.success) {
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setUname(result.data.name);
          toast.success("Login successful!");
          navigate('/');
        } else {
          toast.error(result.data.message);
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error(error.response?.data?.message || "Login failed");
      }
    } else {
      // SignUp
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }

      try {
        const result = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
          confirmPassword,
        });
        if (result.data.success) {
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          toast.success("Registration successful!");
          setLstate("Login");
        } else {
          toast.error(result.data.message);
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error(error.response?.data?.message || "Registration failed");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">{lstate}</h2>

        {/* Social login icons */}
        <div className="flex justify-center gap-6 mb-6">
          <img src={assets.google_icon} alt="Google Login" className="w-8 h-8 cursor-pointer" />
          <img src={assets.github} alt="GitHub Login" className="w-8 h-8 cursor-pointer" />
        </div>
        <p className="text-center text-gray-500 mb-2">or</p>
        <hr className="mb-5" />

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name input (SignUp only) */}
          {lstate === "SignUp" && (
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          {/* Email input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password (SignUp only) */}
          {lstate === "SignUp" && (
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
          >
            {lstate}
          </button>
        </form>

        {/* Toggle link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {lstate === "Login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
              onClick={() => setLstate(lstate === "Login" ? "SignUp" : "Login")}
            >
              {lstate === "Login" ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
