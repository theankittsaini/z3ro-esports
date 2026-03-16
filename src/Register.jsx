import React, { useState } from "react";
import Layout from "./Layout";
import "../style.css";

function Register() {
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

  return (
    <Layout>
      <div className="register-container">
        <h1 className="register-logo">WELCOME</h1>
        
        <button className="btn-google">Log in with Google</button>
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