import React, { useState } from "react";
import { logInUser } from "./auth";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signInWithGithub } from "./auth";
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
      navigate("/home"); // Redirect after successful login
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      setError("Google Sign-In failed.");
    }
  };

  return (
    <div className="auth-container">
      <div className="inner-auth-container">
        <h2>Login to SimplyPi</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="Email">
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
          <button type="submit">Log In</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        <hr />
        <div className="alt-signin-container">
          <button className="google-signin" onClick={handleGoogleLogin}>
            Log in with Google <i className="bx bxl-google"></i>
          </button>
          <button className="github-signin" onClick={signInWithGithub}>
            Log in with GitHub <i className="bx bxl-github"></i>
          </button>
          <button className="momma-signin">
            Log in with Your Mother <i className='bx bx-female'></i>
          </button>
        </div>
      </div>
    </div>
  );
};
