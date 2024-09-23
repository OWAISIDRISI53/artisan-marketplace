// src/components/Login.js
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Both fields are required.");
    } else {
      // Handle login logic here
      setError("");
      console.log("Login successful", { email, password });
    }
  };

  return (
    <div className="login-container p-6 bg-gray-100 shadow-lg rounded-md max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        {"Don't have an account?"}{" "}
        <Link to="/signup" className="text-blue-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
