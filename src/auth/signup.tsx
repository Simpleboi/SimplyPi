import React, { useState } from "react";
import { signUpUser } from "./auth";
import { useNavigate } from "react-router-dom";
import "../styles/signup.scss";
import { signInWithGithub, signInWithGoogle } from "./auth";

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
    <div className="auth-container-signup">
      <div className="inner-signup-container">
        <h2>Sign Up for SimplyPi</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
        <div className="alt-signin-container">
          <button className="google-signin" onClick={signInWithGoogle}>
            Sign Up with Google <i className="bx bxl-google"></i>
          </button>
          <button className="github-signin" onClick={signInWithGithub}>
            Sign Up with GitHub <i className="bx bxl-github"></i>
          </button>
          <button className="github-signin">
            Sign Up with your Mother <i className='bx bx-female'></i>
          </button>
        </div>
      </div>
    </div>
  );
};
