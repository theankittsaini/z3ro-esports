import React, { useState } from "react";
import Layout from "./Layout";
import { supabase } from "./supabaseClient";
import "../style.css";

function Register() {
  const [authError, setAuthError] = useState("");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    fullName: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API call here to send data to the backend
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    setIsGoogleLoading(true);

    if (!supabase) {
      setAuthError(
        "Missing Supabase config. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
      );
      setIsGoogleLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      setAuthError(error.message);
      setIsGoogleLoading(false);
    }
  };

  return (
    <Layout>
      <div className="register-container">
        <h1 className="register-logo">WELCOME</h1>
        
        <button
          className="btn-google"
          type="button"
          onClick={handleGoogleLogin}
          disabled={isGoogleLoading}
        >
          {isGoogleLoading ? "Connecting..." : "Log in with Google"}
        </button>
        {authError && <p className="auth-error">{authError}</p>}
        <div className="divider">
          <span>OR</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Mobile Number or Email"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <p className="register-terms">
            People who use our service may have uploaded your contact
            information to Z3ro Esports.{" "}
            <a href="#">Learn More</a>
          </p>
          <p className="register-terms">
            By signing up, you agree to our{" "}
            <a href="#">Terms</a>, <a href="#">Privacy Policy</a>, and{" "}
            <a href="#">Cookies Policy</a>.
          </p>
          <button type="submit" className="btn-register">
            Sign up
          </button>
        </form>
        <div className="login-link">
          <p>
            Have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
