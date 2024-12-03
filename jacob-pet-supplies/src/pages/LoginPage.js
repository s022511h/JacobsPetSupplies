import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { login, register } from "../auth"; // Import Firebase auth functions

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSigningUp) {
        await register(email, password);
        alert("Account created successfully!");
      } else {
        await login(email, password);
        alert("Logged in successfully!");
        navigate("/dashboard"); // Redirect to dashboard
      }
      setEmail("");
      setPassword("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-8 bg-purple-50 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">
        {isSigningUp ? "Sign Up" : "Login"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md"
      >
        <label
          htmlFor="email"
          className="block text-lg font-bold text-purple-600 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-purple-400 rounded p-2 w-full mb-4"
          placeholder="youremail@example.com"
          required
        />
        <label
          htmlFor="password"
          className="block text-lg font-bold text-purple-600 mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-purple-400 rounded p-2 w-full mb-4"
          placeholder="Enter your password"
          required
        />
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition w-full"
        >
          {isSigningUp ? "Sign Up" : "Login"}
        </button>
      </form>
      <p className="text-purple-700 mt-4">
        {isSigningUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          onClick={() => setIsSigningUp(!isSigningUp)}
          className="font-bold cursor-pointer hover:underline"
        >
          {isSigningUp ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
