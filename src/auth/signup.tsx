import React, { useState } from "react";
import { signUpUser } from "./auth";
import { useNavigate } from "react-router-dom";

export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUpUser(email, password);
      navigate("/"); // Redirect after successful signup
    } catch (error) {
      setError("Failed to create an account.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up for SimplyPi</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  );
};

