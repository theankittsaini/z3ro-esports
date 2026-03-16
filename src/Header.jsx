import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.gif";

function Header() {
  return (
    <header>
      <img
        data-aos="fade-down"
        data-aos-duration="1500"
        className="logo-img"
        src={logo}
        alt="Z3rO Esports Logo"
        style={{ height: "80px" }}
      />
      <h3 data-aos="fade-down" data-aos-duration="1500" className="sub-logo">
        Esports
      </h3>
      <nav>
        <a data-aos="fade-down" data-aos-duration="2000" href="/">
          Home
        </a>
        <Link data-aos="fade-down" data-aos-duration="2000" to="/tournament">
          Tournaments
        </Link>
        <a data-aos="fade-down" data-aos-duration="2000" href="#">
          Results
        </a>
        <a data-aos="fade-down" data-aos-duration="2000" href="/About">
          About US
        </a>
        <a data-aos="fade-down" data-aos-duration="2000" href="/contact">
          Contact US
        </a>
      </nav>
      <button data-aos="fade-down" data-aos-duration="2500" className="btn-signing">
        SIGN IN
      </button>
    </header>
  );
}

export default Header;

