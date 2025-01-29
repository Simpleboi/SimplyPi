import React, { useState } from "react";
import { logInUser } from "./auth";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logInUser(email, password);
      navigate("/"); // Redirect after successful login
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to SimplyPi</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Log In</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
};

