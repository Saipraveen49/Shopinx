import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link if using routing
import { assets } from "../assets/assets";

const Login = () => {
  const [lstate, setLstate] = useState("Login");
  const [name, setName] = useState(""); // Added name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added confirmPassword state

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          {lstate}
        </h2>

        {/* Social login icons */}
        <div className="flex justify-center gap-6 mb-6">
          <img src={assets.google_icon} alt="Google Login" className="w-8 h-8 cursor-pointer" />
          <img src={assets.github} alt="GitHub Login" className="w-8 h-8 cursor-pointer" />
        </div>
        <p className="text-center text-gray-500 mb-2">or</p>
        <hr className="mb-5" />

        {/* Form */}
        <form>
          {/* Name input (Only for Sign Up) */}
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
                onChange={(e) => setName(e.target.value)} // Handle name input change
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
              onChange={(e) => setEmail(e.target.value)} // Handle email input change
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
              onChange={(e) => setPassword(e.target.value)} // Handle password input change
            />
          </div>

          {/* Confirm Password input (Only for Sign Up) */}
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
                onChange={(e) => setConfirmPassword(e.target.value)} // Handle confirm password input change
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

        {/* Toggle between Login and Signup */}
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
