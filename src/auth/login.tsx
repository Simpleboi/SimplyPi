import React, { useState } from "react";
import { logInUser } from "./auth";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "./auth";
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

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/"); // Redirect after Google login
    } catch (error) {
      setError("Google Sign-In failed.");
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
      <button className="google-signin" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

